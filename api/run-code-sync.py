"""
Vercel Serverless：代理 OnlineCompiler 同步执行 API。

路由：POST /api/run-code-sync
上游：https://api.onlinecompiler.io/api/run-code-sync/

环境变量：
  - ONLINECOMPILER_API_KEY（必填）
  - CODE_RUNNER_CORS_ORIGINS（可选，逗号分隔；默认仅生产站点）

注意：Vercel Hobby 函数最长约 10s，上游等待须小于该限制（默认 8s）。

本地：复制 .env.example 为 .env；推荐 `npm run api:dev`（8787），配合 `npm run docs:dev`。
生产：Vercel 自动加载环境变量。
"""

from __future__ import annotations

import json
import os
from http.server import BaseHTTPRequestHandler
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen

ONLINECOMPILER_SYNC_URL = "https://api.onlinecompiler.io/api/run-code-sync/"
DEFAULT_COMPILER = "python-3.14"
MAX_CODE_BYTES = 100 * 1024  # 与 OnlineCompiler 文档一致
# Vercel Hobby 函数约 10s 上限；留出网络与 JSON 处理余量
UPSTREAM_TIMEOUT_SEC = 8

DEFAULT_CORS_ORIGINS = "https://physics.matsubarasoda.com"


def _allowed_origins() -> set[str]:
    raw = os.environ.get("CODE_RUNNER_CORS_ORIGINS", DEFAULT_CORS_ORIGINS)
    return {origin.strip() for origin in raw.split(",") if origin.strip()}


def _cors_headers(handler: BaseHTTPRequestHandler) -> dict[str, str]:
    """仅对白名单 Origin 回显 Allow-Origin，避免 * 导致密钥代理被任意站点滥用。"""
    allowed = _allowed_origins()
    origin = (handler.headers.get("Origin") or "").strip()
    if origin and origin in allowed:
        allow_origin = origin
    elif len(allowed) == 1:
        allow_origin = next(iter(allowed))
    else:
        allow_origin = ""

    headers: dict[str, str] = {
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }
    if allow_origin:
        headers["Access-Control-Allow-Origin"] = allow_origin
    return headers


def _read_api_key() -> str | None:
    key = os.environ.get("ONLINECOMPILER_API_KEY", "").strip()
    return key or None


def _json_response(handler: BaseHTTPRequestHandler, status: int, body: dict) -> None:
    payload = json.dumps(body, ensure_ascii=False).encode("utf-8")
    handler.send_response(status)
    handler.send_header("Content-Type", "application/json; charset=utf-8")
    for name, value in _cors_headers(handler).items():
        handler.send_header(name, value)
    handler.end_headers()
    handler.wfile.write(payload)


def _parse_client_body(raw: bytes) -> tuple[dict | None, str | None]:
    if len(raw) > MAX_CODE_BYTES + 4096:
        return None, "request body too large"
    try:
        data = json.loads(raw.decode("utf-8"))
    except (UnicodeDecodeError, json.JSONDecodeError):
        return None, "invalid JSON body"
    if not isinstance(data, dict):
        return None, "body must be a JSON object"
    return data, None


def _call_onlinecompiler(api_key: str, compiler: str, code: str, stdin: str) -> tuple[dict | None, str | None]:
    upstream_body = json.dumps(
        {"compiler": compiler, "code": code, "input": stdin},
        ensure_ascii=False,
    ).encode("utf-8")
    req = Request(
        ONLINECOMPILER_SYNC_URL,
        data=upstream_body,
        method="POST",
        headers={
            "Authorization": api_key,
            "Content-Type": "application/json",
        },
    )
    try:
        with urlopen(req, timeout=UPSTREAM_TIMEOUT_SEC) as resp:
            return json.loads(resp.read().decode("utf-8")), None
    except HTTPError as e:
        detail = e.read().decode("utf-8", errors="replace")[:500]
        return None, f"upstream HTTP {e.code}: {detail}"
    except URLError as e:
        reason = str(e.reason)
        if "timed out" in reason.lower():
            return None, (
                "upstream timed out: execution exceeded server wait limit "
                f"({UPSTREAM_TIMEOUT_SEC}s; Vercel function ~10s max)"
            )
        return None, f"upstream unreachable: {e.reason}"
    except json.JSONDecodeError:
        return None, "upstream returned invalid JSON"


def _map_upstream_result(upstream: dict) -> dict:
    """转为便于 CodeRunner / CodeOutput 使用的字段。"""
    return {
        "stdout": upstream.get("output") or "",
        "stderr": upstream.get("error") or "",
        "status": upstream.get("status") or "error",
        "exit_code": upstream.get("exit_code"),
        "signal": upstream.get("signal"),
        "time": upstream.get("time"),
        "total": upstream.get("total"),
        "memory": upstream.get("memory"),
        "upstream": upstream,
    }


class handler(BaseHTTPRequestHandler):
    def log_message(self, format: str, *args) -> None:
        # 不记录请求体（可能含用户代码）；保留方法与状态便于 Vercel 仪表盘排查
        if len(args) >= 2:
            print(f"[run-code-sync] {self.command} {args[0]} {args[1]}")
        else:
            print(f"[run-code-sync] {self.command}")

    def do_OPTIONS(self) -> None:
        self.send_response(204)
        for name, value in _cors_headers(self).items():
            self.send_header(name, value)
        self.end_headers()

    def do_POST(self) -> None:
        api_key = _read_api_key()
        if not api_key:
            _json_response(
                self,
                500,
                {"ok": False, "error": "ONLINECOMPILER_API_KEY is not configured"},
            )
            return

        length = int(self.headers.get("Content-Length") or 0)
        raw = self.rfile.read(length) if length else b""
        client, err = _parse_client_body(raw)
        if err:
            _json_response(self, 400, {"ok": False, "error": err})
            return

        code = client.get("code")
        if not isinstance(code, str) or not code.strip():
            _json_response(self, 400, {"ok": False, "error": "missing or empty `code`"})
            return
        if len(code.encode("utf-8")) > MAX_CODE_BYTES:
            _json_response(self, 400, {"ok": False, "error": "code exceeds 100KB limit"})
            return

        compiler = client.get("compiler") or client.get("language") or DEFAULT_COMPILER
        if not isinstance(compiler, str):
            compiler = DEFAULT_COMPILER
        stdin = client.get("input") if isinstance(client.get("input"), str) else ""

        upstream, err = _call_onlinecompiler(api_key, compiler, code, stdin)
        if err:
            _json_response(self, 502, {"ok": False, "error": err})
            return

        result = _map_upstream_result(upstream)
        _json_response(self, 200, {"ok": True, **result})

    def do_GET(self) -> None:
        _json_response(
            self,
            405,
            {"ok": False, "error": "use POST with JSON body: { \"code\": \"...\" }"},
        )

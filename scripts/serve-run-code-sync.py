"""
本地开发用 HTTP 服务：POST /api/run-code-sync

绕过 vercel dev 在 Windows 上调用 Python 函数时的卡顿/ENOENT。
用法：npm run api:dev（默认 http://127.0.0.1:8787）
"""

from __future__ import annotations

import importlib.util
import os
import sys
from http.server import HTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
API_FILE = ROOT / "api" / "run-code-sync.py"
HOST = os.environ.get("RUN_CODE_SYNC_HOST", "127.0.0.1")
PORT = int(os.environ.get("RUN_CODE_SYNC_PORT", "8787"))


def _load_dotenv() -> None:
    env_path = ROOT / ".env"
    if not env_path.is_file():
        return
    for line in env_path.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        os.environ.setdefault(key.strip(), value.strip())


def _load_handler_type():
    spec = importlib.util.spec_from_file_location("run_code_sync_vercel", API_FILE)
    if spec is None or spec.loader is None:
        raise RuntimeError(f"cannot load {API_FILE}")
    module = importlib.util.module_from_spec(spec)
    sys.modules["run_code_sync_vercel"] = module
    spec.loader.exec_module(module)
    handler_cls = getattr(module, "handler", None)
    if handler_cls is None:
        raise RuntimeError("api/run-code-sync.py must define class handler")
    return handler_cls


def main() -> None:
    _load_dotenv()
    handler_cls = _load_handler_type()
    if not os.environ.get("ONLINECOMPILER_API_KEY", "").strip():
        print("[api:dev] warning: ONLINECOMPILER_API_KEY missing in .env", file=sys.stderr)

    server = HTTPServer((HOST, PORT), handler_cls)
    print(f"[api:dev] POST http://{HOST}:{PORT}/api/run-code-sync")
    print("[api:dev] Ctrl+C to stop")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n[api:dev] stopped")
        server.server_close()


if __name__ == "__main__":
    main()

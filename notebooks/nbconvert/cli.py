"""将 notebooks 下的 .ipynb 导出为同目录 .html。"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

import nbformat
from nbconvert import HTMLExporter
from traitlets.config import Config

NBCONVERT_DIR = Path(__file__).resolve().parent
NOTEBOOKS_DIR = NBCONVERT_DIR.parent
REPO_ROOT = NOTEBOOKS_DIR.parent


def make_exporter() -> HTMLExporter:
    config = Config()
    config.TemplateExporter.extra_template_basedirs = [str(NBCONVERT_DIR)]
    config.TemplateExporter.template_name = "physics"
    config.TemplateExporter.exclude_input_prompt = True
    config.TemplateExporter.exclude_output_prompt = True
    return HTMLExporter(config=config)


def resolve_notebook(path: str) -> Path:
    candidate = (REPO_ROOT / path).resolve()
    notebooks_root = NOTEBOOKS_DIR.resolve()

    try:
        candidate.relative_to(notebooks_root)
    except ValueError as exc:
        raise argparse.ArgumentTypeError(
            f"路径须在 notebooks/ 下：{path}"
        ) from exc

    if candidate.suffix.lower() != ".ipynb":
        raise argparse.ArgumentTypeError(f"不是 .ipynb 文件：{path}")

    if not candidate.is_file():
        raise argparse.ArgumentTypeError(f"文件不存在：{path}")

    return candidate


def export_notebook(notebook_path: Path, exporter: HTMLExporter) -> Path:
    with notebook_path.open(encoding="utf-8") as handle:
        notebook = nbformat.read(handle, as_version=4)

    body, _resources = exporter.from_notebook_node(notebook)
    output_path = notebook_path.with_suffix(".html")
    output_path.write_text(body, encoding="utf-8")
    return output_path


def discover_notebooks() -> list[Path]:
    return sorted(NOTEBOOKS_DIR.rglob("*.ipynb"))


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="将 notebooks 中的 .ipynb 导出为同目录 .html（code cell 默认折叠，无 In/Out）。",
    )
    parser.add_argument(
        "notebook",
        nargs="?",
        help="相对仓库根的路径，例如 notebooks/物理学/电磁学/光学/focal-points-and-planes.ipynb；省略则转换全部",
    )
    return parser


def main(argv: list[str] | None = None) -> int:
    parser = build_parser()
    args = parser.parse_args(argv)

    exporter = make_exporter()

    if args.notebook:
        notebooks = [resolve_notebook(args.notebook)]
    else:
        notebooks = discover_notebooks()
        if not notebooks:
            print("未找到 .ipynb 文件。", file=sys.stderr)
            return 1

    errors = 0
    for notebook_path in notebooks:
        rel = notebook_path.relative_to(REPO_ROOT)
        try:
            output_path = export_notebook(notebook_path, exporter)
            print(f"OK  {rel} -> {output_path.relative_to(REPO_ROOT)}")
        except Exception as exc:  # noqa: BLE001 — CLI 汇总错误后继续
            errors += 1
            print(f"ERR {rel}: {exc}", file=sys.stderr)

    return 1 if errors else 0


if __name__ == "__main__":
    raise SystemExit(main())

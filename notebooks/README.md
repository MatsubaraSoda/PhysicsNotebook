# notebooks

Jupyter 源文件与 HTML 导出工作区。**不会**被 VitePress 直接打包；要上站需将导出的 HTML 手动复制到 `docs/public/` 并在笔记中引用。

## 入库策略

Git **仅跟踪**：

- 各目录下的 `*.ipynb`
- 本目录 `README.md`
- `nbconvert/` 下的导出工具与模板

同目录生成的 `*.html` 及其他文件在 `.gitignore` 中忽略，不入库。

## 依赖

本机需已安装 [nbconvert](https://nbconvert.readthedocs.io/)（通常随 Jupyter 环境提供）：

```powershell
pip install nbconvert nbformat
```

## 导出 HTML

在**仓库根目录**执行：

```powershell
# 转换 notebooks/ 下全部 .ipynb
python notebooks/nbconvert/cli.py

# 只转换指定 notebook（路径相对仓库根）
python notebooks/nbconvert/cli.py notebooks/物理学/电磁学/光学/focal-points-and-planes.ipynb
```

默认行为：

- code cell 用 `<details><summary>代码</summary>` 折叠（模板见 `nbconvert/physics/`）
- 不显示 `In [ ]` / `Out [ ]` 计数
- 输出与源文件**同目录**、同名 `.html`，无需指定 out 路径

导出**不修改** `.ipynb`，不影响 Colab 打开。

若报错 `'metadata' is a required property`，请在 Jupyter 中对 notebook **Run All** 后重试。

## 目录结构

```
notebooks/
  README.md
  nbconvert/
    cli.py              # 导出 CLI
    physics/            # nbconvert 模板（继承 lab，折叠 code cell）
      conf.json
      base.html.j2
  物理学/…/*.ipynb
  物理学/…/*.html       # 本地导出产物，不入库
```

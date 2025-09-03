本地预览

```cmd
npx vitepress dev docs
```

pdf 转 png

```cmd
# 基础转换
magick -density 600 "题目.pdf" -quality 100 -sharpen 0x1.0 "题目.png"

# 保持颜色准确的转换方法（推荐）- AI 生成
magick -density 600 -colorspace sRGB "题目.pdf" -quality 100 -sharpen 0x1.0 "题目.png"

# 添加白色背景色 - AI 生成
magick -density 600 -colorspace sRGB "题目.pdf" -quality 100 -sharpen 0x1.0 -background white -alpha remove "题目.png"
```

插入图片

```html
<div style="width: fit-content; margin: 0 auto;">
  <img src="/物理学/力学/静力学/FBD/Prob_F6_24/Prob_F6_24_FBD.png" alt="Prob_F6_24_FBD" style="height: 350px; background-color: white; padding: 10px; border-radius: 5px;">
</div>
```

tikz 作图

```tex
\documentclass{standalone}
\usepackage{tikz}
\usetikzlibrary{calc}

\begin{document}
\begin{tikzpicture}

    % 从这里开始   

\end{tikzpicture}
\end{document}
```

vitepress 自带 container

<!-- https://vitepress.dev/guide/markdown#custom-containers -->

```
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

单词解释

```HTML
<div class="vocab-term">
<div class="vocab-term-title">简单解释</div>
<div class="vocab-term-content">
详细解释
</div>
</div>
```

单词链接

```HTML
<VocabHover vocabFile="单词">单词</VocabHover>
```

居中

```html
<div style="width: fit-content; margin: 0 auto;">

内容

</div>
```

`keybindings.json`

```json
{
  "key": "ctrl+numpad1",
  "command": "editor.action.insertSnippet",
  "when": "editorTextFocus && editorHasSelection",
  "args": {
    "snippet": "<ruby>${TM_SELECTED_TEXT}<rt>$0</rt></ruby>"
  }
},
```
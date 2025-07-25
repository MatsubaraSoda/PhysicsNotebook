本地预览

```cmd
npx vitepress dev docs
```

pdf 转 png

```cmd
magick -density 600 "题目.pdf" -quality 100 -sharpen 0x1.0 "题目.png"
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

```
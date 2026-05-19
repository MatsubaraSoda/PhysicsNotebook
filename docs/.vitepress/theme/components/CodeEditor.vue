<script setup lang="ts">
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'

import Prism from 'prismjs'
import 'prismjs/components/prism-python'

withDefaults(
  defineProps<{
    readonly?: boolean
  }>(),
  { readonly: false },
)

const code = defineModel<string>({ default: '' })

const highlighter = (value: string) =>
  Prism.highlight(value, Prism.languages.python, 'python')
</script>

<template>
  <PrismEditor
    v-model="code"
    class="vp-prism-editor"
    :highlight="highlighter"
    :readonly="readonly"
    line-numbers
  />
</template>

<style scoped>
/* 深度结合 VitePress 的原生 CSS 变量 */
.vp-prism-editor {
  background: var(--vp-code-block-bg) !important;
  color: var(--vp-c-text-1);

  font-family: var(--vp-font-family-mono);
  font-size: var(--vp-code-font-size, 14px);
  line-height: var(--vp-code-line-height, 1.5);

  padding: 16px;
  margin: 16px 0;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);

  /* 长行横向滚动；行号列与代码区在同一 wrapper 内一起滚动 */
  overflow-x: auto;
}

/* 覆盖库默认的 pre-wrap，禁止软折行，一行逻辑代码对应一个行号 */
.vp-prism-editor :deep(.prism-editor__editor),
.vp-prism-editor :deep(.prism-editor__textarea) {
  white-space: pre !important;
  word-wrap: normal !important;
  word-break: normal !important;
  overflow-wrap: normal !important;
}

/* 允许代码区随内容撑开宽度（库默认 overflow:hidden 会裁切长行） */
.vp-prism-editor :deep(.prism-editor__container) {
  overflow: visible;
  width: auto;
  flex: 1;
  min-width: 0;
}

/* 高亮层默认字色（未包在 token 内的纯文本） */
.vp-prism-editor :deep(.prism-editor__editor) {
  color: var(--vp-c-text-1);
}

.vp-prism-editor :deep(.prism-editor__textarea:focus) {
  outline: none;
}

/* 选区：半透明底色 + 文字透明，露出底层语法高亮 */
.vp-prism-editor :deep(.prism-editor__textarea::selection) {
  background-color: rgba(100, 150, 255, 0.3) !important;
  color: transparent !important;
}

.vp-prism-editor :deep(.prism-editor__textarea::-moz-selection) {
  background-color: rgba(100, 150, 255, 0.3) !important;
  color: transparent !important;
}

html.dark .vp-prism-editor :deep(.prism-editor__textarea::selection) {
  background-color: rgba(255, 255, 255, 0.2) !important;
  color: transparent !important;
}

html.dark .vp-prism-editor :deep(.prism-editor__textarea::-moz-selection) {
  background-color: rgba(255, 255, 255, 0.2) !important;
  color: transparent !important;
}

.vp-prism-editor :deep(.prism-editor__line-numbers) {
  padding-right: 16px !important;
  flex-shrink: 0;
  white-space: nowrap;
}
</style>

<!--
  Prism 高亮通过 innerHTML 注入，scoped + :deep 在部分环境下无法命中 .token。
  语法 token 样式放在非 scoped 块，并用 .prism-editor__editor 限定在代码区。
-->
<style>
/* 行号列：库给行号加了 token comment，需单独覆盖 */
.vp-prism-editor .prism-editor__line-number {
  color: var(--vp-c-text-2) !important;
  font-style: normal !important;
}

/* 亮色模式 */
.vp-prism-editor .prism-editor__editor .token.comment {
  color: #6a9955;
  font-style: italic;
}

.vp-prism-editor .prism-editor__editor .token.punctuation {
  color: var(--vp-c-text-1);
}

.vp-prism-editor .prism-editor__editor .token.keyword,
.vp-prism-editor .prism-editor__editor .token.atrule,
.vp-prism-editor .prism-editor__editor .token.builtin {
  color: #0550ae;
}

.vp-prism-editor .prism-editor__editor .token.function,
.vp-prism-editor .prism-editor__editor .token.class-name {
  color: #8250df;
}

.vp-prism-editor .prism-editor__editor .token.number,
.vp-prism-editor .prism-editor__editor .token.boolean {
  color: #0550ae;
}

.vp-prism-editor .prism-editor__editor .token.string,
.vp-prism-editor .prism-editor__editor .token.char,
.vp-prism-editor .prism-editor__editor .token.attr-value {
  color: #0a3069;
}

.vp-prism-editor .prism-editor__editor .token.operator,
.vp-prism-editor .prism-editor__editor .token.entity {
  color: #24292f;
}

/* 暗色模式 */
html.dark .vp-prism-editor .prism-editor__editor .token.comment {
  color: #8b949e;
  font-style: italic;
}

html.dark .vp-prism-editor .prism-editor__editor .token.punctuation {
  color: var(--vp-c-text-1);
}

html.dark .vp-prism-editor .prism-editor__editor .token.keyword,
html.dark .vp-prism-editor .prism-editor__editor .token.atrule,
html.dark .vp-prism-editor .prism-editor__editor .token.builtin {
  color: #ff7b72;
}

html.dark .vp-prism-editor .prism-editor__editor .token.function,
html.dark .vp-prism-editor .prism-editor__editor .token.class-name {
  color: #d2a8ff;
}

html.dark .vp-prism-editor .prism-editor__editor .token.number,
html.dark .vp-prism-editor .prism-editor__editor .token.boolean {
  color: #79c0ff;
}

html.dark .vp-prism-editor .prism-editor__editor .token.string,
html.dark .vp-prism-editor .prism-editor__editor .token.char,
html.dark .vp-prism-editor .prism-editor__editor .token.attr-value {
  color: #a5d6ff;
}

html.dark .vp-prism-editor .prism-editor__editor .token.operator,
html.dark .vp-prism-editor .prism-editor__editor .token.entity {
  color: #e6edf3;
}
</style>
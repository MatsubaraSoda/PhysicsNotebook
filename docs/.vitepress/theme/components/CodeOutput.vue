<script setup lang="ts">
const output = defineModel<string>({ default: '' })
</script>

<template>
  <pre class="vp-code-output" aria-label="程序运行输出">{{ output }}</pre>
</template>

<style scoped>
.vp-code-output {
  background: var(--vp-code-block-bg);
  color: var(--vp-c-text-1);
  font-family: var(--vp-font-family-mono);
  font-size: var(--vp-code-font-size, 14px);
  line-height: var(--vp-code-line-height, 1.5);
  padding: 16px;
  margin: 16px 0;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  overflow-x: auto;
  white-space: pre;
  word-wrap: normal;
  word-break: normal;
  overflow-wrap: normal;
}

.vp-code-output:empty::before {
  content: '（点击运行查看输出）';
  color: var(--vp-c-text-3);
}
</style>

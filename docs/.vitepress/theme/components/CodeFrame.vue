<script setup lang="ts">
import { computed, ref } from 'vue'
import CodeEditor from './CodeEditor.vue'
import CodeOutput from './CodeOutput.vue'
import CodeRunner from './CodeRunner.vue'

const props = withDefaults(
  defineProps<{
    title?: string
    /** 说明文字；也可用 #description 插槽（可含行内 HTML） */
    description?: string
    lang?: string
  }>(),
  {
    title: '',
    description: '',
    lang: 'Python',
  },
)

const code = defineModel<string>('code', { default: '' })
const output = defineModel<string>('output', { default: '' })

const runnerRef = ref<InstanceType<typeof CodeRunner> | null>(null)
const hasRun = ref(false)
const lastOk = ref(true)

const copyCodeState = ref<'idle' | 'copied'>('idle')
const copyOutState = ref<'idle' | 'copied'>('idle')

const status = computed(() => {
  if (runnerRef.value?.running) return 'running'
  if (hasRun.value && !lastOk.value) return 'error'
  if (hasRun.value) return 'done'
  return 'idle'
})

const statusLabel = computed(() => {
  const map = {
    idle: '就绪',
    running: '运行中',
    done: '完成',
    error: '失败',
  } as const
  return map[status.value]
})

function onFinished(ok: boolean) {
  hasRun.value = true
  lastOk.value = ok
}

async function copyText(text: string, which: 'code' | 'output') {
  try {
    await navigator.clipboard.writeText(text)
    if (which === 'code') {
      copyCodeState.value = 'copied'
      setTimeout(() => { copyCodeState.value = 'idle' }, 1600)
    } else {
      copyOutState.value = 'copied'
      setTimeout(() => { copyOutState.value = 'idle' }, 1600)
    }
  } catch {
    /* 忽略 */
  }
}
</script>

<template>
  <section class="vp-code-frame" aria-label="交互式代码示例">
    <header class="vp-code-frame__head">
      <div class="vp-code-frame__brand">
        <h3 v-if="title" class="vp-code-frame__title">{{ title }}</h3>
        <span class="vp-code-frame__lang">{{ lang }}</span>
      </div>
      <div class="vp-code-frame__actions">
        <span
          class="vp-code-frame__status"
          :class="`vp-code-frame__status--${status}`"
          role="status"
        >{{ statusLabel }}</span>
        <CodeRunner
          ref="runnerRef"
          :code="code"
          v-model:output="output"
          @finished="onFinished"
        />
      </div>
    </header>

    <div v-if="$slots.description || description" class="vp-code-frame__desc">
      <slot name="description">{{ description }}</slot>
    </div>

    <div class="vp-code-frame__body">
      <section class="vp-code-frame__panel" aria-label="代码编辑区">
        <header class="vp-code-frame__panel-head">
          <span class="vp-code-frame__panel-title">代码</span>
          <button
            type="button"
            class="vp-code-frame__copy"
            :class="{ 'is-copied': copyCodeState === 'copied' }"
            :aria-label="copyCodeState === 'copied' ? '已复制' : '复制代码'"
            @click="copyText(code, 'code')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <rect x="9" y="9" width="13" height="13" rx="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          </button>
        </header>
        <div class="vp-code-frame__panel-body">
          <CodeEditor v-model="code" />
        </div>
      </section>

      <section class="vp-code-frame__panel" aria-label="运行输出区">
        <header class="vp-code-frame__panel-head">
          <span class="vp-code-frame__panel-title">输出</span>
          <button
            type="button"
            class="vp-code-frame__copy"
            :class="{ 'is-copied': copyOutState === 'copied' }"
            :aria-label="copyOutState === 'copied' ? '已复制' : '复制输出'"
            :disabled="!output"
            @click="copyText(output, 'output')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <rect x="9" y="9" width="13" height="13" rx="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          </button>
        </header>
        <div class="vp-code-frame__panel-body">
          <CodeOutput v-model="output" />
        </div>
      </section>
    </div>

    <footer class="vp-code-frame__foot">
      运行经 <code>/api/run-code-sync</code> 代理；上游输出最多 999 字符。
    </footer>
  </section>
</template>

<style scoped>
.vp-code-frame {
  --vp-code-frame-editor-min-h: 220px;
  --vp-code-frame-output-min-h: 160px;
  margin: 24px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg);
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
}

html.dark .vp-code-frame {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
}

.vp-code-frame__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 14px;
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-alt);
}

.vp-code-frame__brand {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}

.vp-code-frame__title {
  margin: 0;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.3;
}

.vp-code-frame__lang {
  flex-shrink: 0;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-family: var(--vp-font-family-mono);
  background: var(--vp-code-block-bg);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
}

.vp-code-frame__actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.vp-code-frame__status {
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 999px;
  border: 1px solid transparent;
  color: var(--vp-c-text-2);
}

.vp-code-frame__status--running {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  background: color-mix(in srgb, var(--vp-c-brand-1) 12%, transparent);
}

.vp-code-frame__status--done {
  color: #2da44e;
  border-color: rgba(45, 164, 78, 0.4);
  background: rgba(45, 164, 78, 0.08);
}

html.dark .vp-code-frame__status--done {
  color: #7ee787;
}

.vp-code-frame__status--error {
  color: #cf222e;
  border-color: rgba(207, 34, 46, 0.35);
  background: rgba(207, 34, 46, 0.08);
}

html.dark .vp-code-frame__status--error {
  color: #ff7b72;
}

.vp-code-frame__desc {
  padding: 12px 14px;
  border-bottom: 1px solid var(--vp-c-divider);
  font-size: 0.875rem;
  line-height: 1.65;
  color: var(--vp-c-text-2);
}

.vp-code-frame__desc :deep(code) {
  padding: 0.15em 0.4em;
  border-radius: 4px;
  font-family: var(--vp-font-family-mono);
  font-size: 0.85em;
  background: var(--vp-code-block-bg);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
}

.vp-code-frame__body {
  display: flex;
  flex-direction: column;
}

.vp-code-frame__panel + .vp-code-frame__panel {
  border-top: 1px solid var(--vp-c-divider);
}

.vp-code-frame__panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 14px 0;
}

.vp-code-frame__panel-title {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
}

.vp-code-frame__copy {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s, background-color 0.2s;
}

.vp-code-frame__copy svg {
  width: 16px;
  height: 16px;
}

.vp-code-frame__copy:hover:not(:disabled) {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.vp-code-frame__copy:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.vp-code-frame__copy.is-copied {
  border-color: #2da44e;
  color: #2da44e;
  background: rgba(45, 164, 78, 0.08);
}

html.dark .vp-code-frame__copy.is-copied {
  border-color: #7ee787;
  color: #7ee787;
}

.vp-code-frame__panel-body {
  margin: 8px 14px 14px;
  min-height: 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-code-block-bg);
  overflow: auto;
}

.vp-code-frame__panel:first-of-type .vp-code-frame__panel-body {
  min-height: var(--vp-code-frame-editor-min-h);
  max-height: 360px;
}

.vp-code-frame__panel:last-of-type .vp-code-frame__panel-body {
  min-height: var(--vp-code-frame-output-min-h);
  max-height: 280px;
}

.vp-code-frame__panel-body :deep(.vp-prism-editor),
.vp-code-frame__panel-body :deep(.vp-code-output) {
  margin: 0;
  border: none;
  border-radius: 0;
  background: transparent;
}

.vp-code-frame__foot {
  padding: 8px 14px;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 0.72rem;
  color: var(--vp-c-text-3);
  background: var(--vp-c-bg-alt);
}

.vp-code-frame__foot code {
  font-family: var(--vp-font-family-mono);
  font-size: 0.9em;
}
</style>

<script setup lang="ts">
import { computed, ref } from 'vue'

/** 同源代理：/api/run-code-sync → OnlineCompiler run-code-sync（仅 Python） */
const DEFAULT_ENDPOINT = '/api/run-code-sync'
const PYTHON_COMPILER = 'python-3.14'

interface CodeRunnerResponse {
  ok: boolean
  error?: string
  stdout?: string
  stderr?: string
  status?: string
  exit_code?: number | null
  signal?: string | null
  time?: string
  total?: string
  memory?: string
}

const props = withDefaults(
  defineProps<{
    /** 待执行的 Python 源码（由 CodeFrame / 父组件传入） */
    code?: string
    /** 代理地址；默认 /api/run-code-sync */
    endpoint?: string
    /** 标准输入（可选） */
    input?: string
  }>(),
  {
    code: '',
    endpoint: DEFAULT_ENDPOINT,
    input: '',
  },
)

const canRun = computed(() => props.code.trim().length > 0)

const output = defineModel<string>('output', { default: '' })

const emit = defineEmits<{
  finished: [ok: boolean]
}>()

const running = ref(false)

defineExpose({ running })

function formatOutput(data: CodeRunnerResponse): string {
  if (!data.ok) {
    return data.error ?? '运行失败'
  }
  const parts: string[] = []
  if (data.stdout) parts.push(data.stdout)
  if (data.stderr) parts.push(data.stderr)
  if (data.status && data.status !== 'success') {
    parts.push(`[status: ${data.status}, exit_code: ${data.exit_code ?? '—'}]`)
  }
  return parts.join('\n').trimEnd() || '(无输出)'
}

async function run() {
  if (running.value || !canRun.value) return

  const source = props.code
  running.value = true
  output.value = ''

  try {
    const res = await fetch(props.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        code: source,
        compiler: PYTHON_COMPILER,
        input: props.input,
      }),
    })

    const text = await res.text()
    let data: CodeRunnerResponse
    try {
      data = JSON.parse(text) as CodeRunnerResponse
    } catch {
      output.value = `HTTP ${res.status}: ${text}`
      emit('finished', false)
      return
    }

    if (!res.ok || !data.ok) {
      output.value = data.error ?? `HTTP ${res.status}`
      emit('finished', false)
      return
    }

    output.value = formatOutput(data)
    emit('finished', true)
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    output.value = `请求失败: ${message}`
    emit('finished', false)
  } finally {
    running.value = false
  }
}
</script>

<template>
  <button
    type="button"
    class="vp-code-runner"
    :disabled="running || !canRun"
    :aria-label="running ? '运行中' : canRun ? '运行 Python 代码' : '请先输入代码'"
    @click="run"
  >
    <svg
      v-if="!running"
      class="vp-code-runner__icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
    <svg
      v-else
      class="vp-code-runner__icon vp-code-runner__icon--spin"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" stroke-opacity="0.25" />
      <path d="M12 3a9 9 0 0 1 9 9" stroke-linecap="round" />
    </svg>
  </button>
</template>

<style scoped>
.vp-code-runner {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  margin: 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-code-block-bg);
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition:
    background-color 0.2s,
    border-color 0.2s,
    color 0.2s;
}

.vp-code-runner:hover:not(:disabled) {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.vp-code-runner:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.vp-code-runner__icon {
  width: 20px;
  height: 20px;
}

.vp-code-runner__icon--spin {
  animation: vp-code-runner-spin 0.8s linear infinite;
}

@keyframes vp-code-runner-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

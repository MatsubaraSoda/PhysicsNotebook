<template>
  <div class="iframe-full-height-wrapper">
    <iframe
      ref="iframeRef"
      class="iframe-full-height"
      :src="src"
      :title="title"
      :style="iframeStyle"
      :loading="loading"
      @load="onLoad"
    ></iframe>
  </div>
</template>

<script setup>
import { defineProps, ref, computed, onBeforeUnmount } from 'vue'

const props = defineProps({
  // iframe 地址，必填
  src: { type: String, required: true },
  // 无障碍 / 辅助说明
  title: { type: String, default: 'Embedded content' },
  // 最小高度（px）
  minHeight: { type: Number, default: 600 },
  // 最大高度（px），0 表示不限制
  maxHeight: { type: Number, default: 0 },
  // 懒加载策略：lazy / eager
  loading: { type: String, default: 'lazy' }
})

const iframeRef = ref(null)
const height = ref(props.minHeight)
let resizeObserver = null

const iframeStyle = computed(() => {
  const style = {
    width: '105%',
    border: 'none',
    display: 'block',
    height: height.value + 'px'
  }

  if (props.maxHeight > 0 && height.value > props.maxHeight) {
    style.height = props.maxHeight + 'px'
  }

  return style
})

function updateHeight() {
  const iframe = iframeRef.value
  if (!iframe) return

  let doc
  try {
    doc = iframe.contentDocument || iframe.contentWindow?.document
  } catch (e) {
    // 跨域无法访问时直接跳过
    return
  }

  if (!doc) return

  const body = doc.body
  const html = doc.documentElement
  const app = doc.getElementById('app')

  let newHeight = Math.max(
    body?.scrollHeight || 0,
    html?.scrollHeight || 0,
    app?.scrollHeight || 0,
    app?.offsetHeight || 0
  )

  if (newHeight) {
    height.value = Math.max(props.minHeight, newHeight)
  }
}

function onLoad() {
  updateHeight()

  const iframe = iframeRef.value
  if (!iframe) return

  let doc
  try {
    doc = iframe.contentDocument || iframe.contentWindow?.document
  } catch (e) {
    return
  }

  if (!doc || !doc.body) return

  // 清理旧的 observer
  if (resizeObserver) {
    resizeObserver.disconnect()
  }

  // 使用 ResizeObserver 监听 iframe 内部 body 的尺寸变化
  resizeObserver = new ResizeObserver(() => {
    updateHeight()
  })

  resizeObserver.observe(doc.body)
  
  // 额外监听 html，因为有时候 body 高度不包含 margin
  if (doc.documentElement) {
    resizeObserver.observe(doc.documentElement)
  }
}

onBeforeUnmount(() => {
  if (resizeObserver) {
    resizeObserver.disconnect()
    resizeObserver = null
  }
})
</script>

<style scoped>
.iframe-full-height-wrapper {
  width: 100%;
}

.iframe-full-height {
  background-color: transparent;
  transition: height 0.3s ease-out;
}
</style>


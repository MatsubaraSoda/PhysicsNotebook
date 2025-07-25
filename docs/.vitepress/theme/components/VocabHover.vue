<template>
  <span
    class="vocab-link"
    :data-vocab-file="vocabFile"
    @mouseenter="loadContent"
    @mouseleave="resetTooltipPosition"
  >
    <a
      :href="vocabHref"
      target="_blank"
      style="color: inherit; text-decoration: none;"
    >
      <slot />
    </a>
    <div 
      ref="tooltipRef"
      class="vocab-tooltip"
      :class="{ 'vocab-tooltip-visible': isVisible, 'vocab-tooltip-pinned': isPinned }"
      :style="tooltipStyle"
      @mousedown="startDrag"
      @mouseenter="isVisible = true"
      @mouseleave="resetTooltipPosition"
    >
      <div class="vocab-header">
        <div class="vocab-header-controls">
          <button 
            @click="togglePin" 
            @mousedown.stop
            class="vocab-pin-button"
            :class="{ 'vocab-pin-active': isPinned }"
            :title="isPinned ? '取消固定' : '固定窗口'"
          >
            {{ isPinned ? '📌' : '📍' }}
          </button>
          <a 
            :href="vocabHref" 
            target="_blank" 
            class="vocab-open-link"
            title="在新标签页中打开"
          >
            🔗 在新标签页中打开
          </a>
        </div>
      </div>
      <div class="vocab-content" v-html="tooltipContent" />
    </div>
  </span>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import MarkdownIt from 'markdown-it'
import mermaid from 'mermaid'

const props = defineProps({
  vocabFile: String,
  fallbackContent: {
    type: String,
    default: ''
  },
  basePaths: {
    type: Array,
    default: () => [
      '/日语/知识点/'
    ]
  }
})

// 初始化 mermaid
onMounted(() => {
  mermaid.initialize({
    startOnLoad: false,
    theme: 'default',
    securityLevel: 'loose',
    fontFamily: 'monospace'
  })
})

// 初始化 markdown-it 实例
const md = new MarkdownIt({
  html: true, // 允许 HTML 标签
  breaks: true, // 将换行符转换为 <br>
  linkify: true // 自动识别链接
})

const tooltipContent = ref('<div class="vocab-loading">加载中...</div>')
const tooltipRef = ref(null)
const isDragging = ref(false)
const dragOffset = ref({ x: 0, y: 0 })
const isVisible = ref(false)
const isPinned = ref(false)
let contentLoaded = false
let resetTimeoutId = null // 添加定时器ID变量

const vocabHref = `/日语/知识点/${props.vocabFile}.html`

// 计算 tooltip 的样式
const tooltipStyle = computed(() => {
  if (isDragging.value || (dragOffset.value.x !== 0 || dragOffset.value.y !== 0)) {
    return {
      transform: `translateX(calc(-50% + ${dragOffset.value.x}px)) translateY(${dragOffset.value.y}px)`,
      transition: isDragging.value ? 'none' : 'transform 0.5s ease, opacity 0.5s ease, visibility 0.5s ease'
    }
  }
  return {}
})

// 开始拖拽
function startDrag(event) {
  event.preventDefault()
  event.stopPropagation() // 阻止事件冒泡
  
  // 如果点击的是链接或按钮，不要开始拖拽
  if (event.target.classList.contains('vocab-open-link') || 
      event.target.closest('.vocab-open-link') ||
      event.target.classList.contains('vocab-pin-button') ||
      event.target.closest('.vocab-pin-button')) {
    return
  }
  
  isDragging.value = true
  
  const startX = event.clientX
  const startY = event.clientY
  const initialOffsetX = dragOffset.value.x
  const initialOffsetY = dragOffset.value.y
  
  function onMouseMove(e) {
    if (isDragging.value) {
      dragOffset.value.x = initialOffsetX + (e.clientX - startX)
      dragOffset.value.y = initialOffsetY + (e.clientY - startY)
    }
  }
  
  function onMouseUp() {
    isDragging.value = false
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
  }
  
  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', onMouseUp)
}

// 重置 tooltip 位置
function resetTooltipPosition() {
  // 如果窗口被固定，不要隐藏
  if (isPinned.value) {
    return
  }
  
  isVisible.value = false
  isDragging.value = false
  // 延迟 0.5 秒恢复默认位置，与消失动画同步
  resetTimeoutId = setTimeout(() => {
    dragOffset.value = { x: 0, y: 0 }
    resetTimeoutId = null
  }, 500)
}

// 切换固定状态
function togglePin() {
  isPinned.value = !isPinned.value
  if (isPinned.value) {
    isVisible.value = true
  }
}

// 渲染 Mermaid 图表
async function renderMermaid() {
  await nextTick()
  if (!tooltipRef.value) return
  
  const mermaidElements = tooltipRef.value.querySelectorAll('.language-mermaid code, pre code.language-mermaid')
  
  for (let i = 0; i < mermaidElements.length; i++) {
    const element = mermaidElements[i]
    const code = element.textContent || element.innerText
    
    try {
      const { svg } = await mermaid.render(`mermaid-${Date.now()}-${i}`, code)
      const container = document.createElement('div')
      container.innerHTML = svg
      container.className = 'mermaid-container'
      
      // 替换原始的 code 元素
      const parent = element.closest('pre') || element.parentNode
      parent.parentNode.replaceChild(container, parent)
    } catch (error) {
      console.error('Mermaid rendering error:', error)
      // 如果渲染失败，保持原始内容
    }
  }
}

async function loadContent() {
  // 清除任何待执行的重置操作
  if (resetTimeoutId) {
    clearTimeout(resetTimeoutId)
    resetTimeoutId = null
  }
  
  isVisible.value = true
  if (contentLoaded) return
  tooltipContent.value = '<div class="vocab-loading">加载中...</div>'

  // 首先尝试获取构建后的 HTML 内容
  for (const path of props.basePaths) {
    try {
      const htmlResponse = await fetch(`${path}${props.vocabFile}.html`)
      if (htmlResponse.ok) {
        const html = await htmlResponse.text()
        // 从 HTML 中提取主要内容
        const parser = new DOMParser()
        const doc = parser.parseFromString(html, 'text/html')
        
        // 尝试多种可能的内容选择器
        const selectors = [
          '.VPDoc .vp-doc',
          '.vp-doc',
          'main .content',
          'main',
          '.content',
          'article',
          '#app'
        ]
        
        let mainContent = null
        for (const selector of selectors) {
          mainContent = doc.querySelector(selector)
          if (mainContent && mainContent.innerHTML.trim()) {
            break
          }
        }
        
        if (mainContent && mainContent.innerHTML.trim()) {
          // 清理一些不需要的元素
          const content = mainContent.cloneNode(true)
          const unwantedElements = content.querySelectorAll('nav, .nav, .sidebar, .footer, .header, script, style')
          unwantedElements.forEach(el => el.remove())
          
          tooltipContent.value = content.innerHTML
          contentLoaded = true
          // 渲染 Mermaid 图表
          await renderMermaid()
          return
        }
      }
    } catch (e) {
      // 忽略错误，继续尝试 markdown
    }
  }

  // 如果 HTML 获取失败，回退到 markdown（主要用于开发环境）
  for (const path of props.basePaths) {
    try {
      const response = await fetch(`${path}${props.vocabFile}.md`)
      if (response.ok) {
        const markdown = await response.text()
        tooltipContent.value = md.render(markdown)
        contentLoaded = true
        // 渲染 Mermaid 图表
        await renderMermaid()
        return
      }
    } catch (e) {
      // 忽略错误
    }
  }

  tooltipContent.value = props.fallbackContent || `
    <h1>${props.vocabFile}</h1>
    <p>词汇内容加载失败</p>
  `
  contentLoaded = true
}
</script>

<style scoped>
.vocab-link {
  position: relative;
  display: inline;
  cursor: pointer;
  border-bottom: 2px dotted #2b5d8c; /* 添加由点构成的蓝色虚线下划线 */
}

.vocab-tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 10px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 2px solid #2b5d8c;
  border-radius: 8px;
  box-shadow: 0 8px 25px rgba(43, 93, 140, 0.3);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease, visibility 0.5s ease;
  z-index: 1000;
  min-width: 400px;
  max-width: 600px;
  font-size: 0.9em;
  line-height: 1.6;
  white-space: normal;
  cursor: move; /* 添加拖拽光标 */
  user-select: none; /* 防止文本选择 */
  color: black; 
}

.vocab-tooltip-visible {
  opacity: 1;
  visibility: visible;
}

.vocab-tooltip-pinned {
  opacity: 1;
  visibility: visible;
  box-shadow: 0 8px 25px rgba(43, 93, 140, 0.4), 0 0 0 2px rgba(43, 93, 140, 0.2);
}

.vocab-header {
  padding: 8px 15px;
  border-bottom: 1px solid #e0e0e0;
  background: rgba(43, 93, 140, 0.05);
  border-radius: 6px 6px 0 0;
  margin: -2px -2px 0 -2px;
}

.vocab-header-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.vocab-pin-button {
  background: none;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 0.8em;
  transition: all 0.2s ease;
  color: #666;
}

.vocab-pin-button:hover {
  background: rgba(43, 93, 140, 0.1);
  border-color: #2b5d8c;
  color: #2b5d8c;
}

.vocab-pin-active {
  background: rgba(43, 93, 140, 0.15);
  border-color: #2b5d8c;
  color: #2b5d8c;
}

.vocab-open-link {
  color: #2b5d8c;
  text-decoration: none;
  font-size: 0.85em;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease;
}

.vocab-open-link:hover {
  color: #1a4a6b;
  text-decoration: underline;
}

.vocab-content {
  padding: 15px;
  max-height: 300px;
  overflow-y: auto;
  cursor: auto; /* 内容区域使用默认光标 */
}

.vocab-loading {
  color: #666;
  font-style: italic;
}

.mermaid-container {
  display: flex;
  justify-content: center;
  margin: 15px 0;
}

.mermaid-container svg {
  max-width: 100%;
  height: auto;
}
</style>

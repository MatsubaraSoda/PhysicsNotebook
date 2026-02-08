import { onMounted, onUpdated, nextTick } from 'vue'

declare global {
  const MathJax: {
    typesetPromise: (elements?: Element[]) => Promise<void>
    typeset: (elements?: Element[]) => void
  } | undefined
}

/**
 * MathJax 4 composable for rendering mathematical expressions
 * 支持 Vue 热更新，组件更新后自动重新渲染公式
 */
export function useMathJax() {
  const typeset = async (element?: Element | Element[]) => {
    await nextTick()
    if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
      const elementsArray = element
        ? Array.isArray(element)
          ? element
          : [element]
        : undefined
      await MathJax.typesetPromise(elementsArray)
    }
  }

  onMounted(() => {
    typeset()
  })

  onUpdated(() => {
    typeset()
  })

  return {
    typeset
  }
}
// 参考
// http://www.freeendless.com/misc/vitepress/image-zoom.html
// http://www.ducms.com/frontend/vue3/vitepress-medium-zoom
import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import './index.css'
import mermaid from 'mermaid'

// 引入自定义组件
import VocabHover from './components/VocabHover.vue'

let zoomInstance: ReturnType<typeof mediumZoom> | null = null

export default {
  ...DefaultTheme,

  enhanceApp({ app, router }) {
    // 注册组件
    app.component('VocabHover', VocabHover)

    // 初始化 mermaid
    mermaid.initialize({ startOnLoad: true })
  },

  setup() {
    const route = useRoute()

    const initZoom = () => {
      if (zoomInstance) zoomInstance.detach()
      zoomInstance = mediumZoom('[data-zoomable]', {
        background: 'var(--vp-c-bg)'
      })
    }

    onMounted(() => initZoom())
    watch(() => route.path, () => nextTick(() => initZoom()))
  }
}

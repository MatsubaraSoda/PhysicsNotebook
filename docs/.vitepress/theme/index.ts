// 参考
// http://www.freeendless.com/misc/vitepress/image-zoom.html
// http://www.ducms.com/frontend/vue3/vitepress-medium-zoom

import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import './index.css'
import mermaid from 'mermaid'
// 不再直接导入 mathjax-full，而是在客户端动态加载

// 引入 layui
// import 'layui/dist/css/layui.css'
// import 'layui/dist/layui.js'

// bootstrap
// npm i bootstrap@5.3.7 --save
// import 'bootstrap/dist/css/bootstrap.min.css'
// 会影响整个 vitepress 样式

// 引入自定义组件
import VocabHover from './components/VocabHover.vue'

let zoomInstance: ReturnType<typeof mediumZoom> | null = null

export default {
  ...DefaultTheme,

  enhanceApp({ app, router }: { app: import('vue').App, router: any }) {
    // 注册组件
    app.component('VocabHover', VocabHover);

    // 初始化 mermaid
    mermaid.initialize({ startOnLoad: true });
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

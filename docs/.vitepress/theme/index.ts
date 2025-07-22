// 参考
// http://www.freeendless.com/misc/vitepress/image-zoom.html
// http://www.ducms.com/frontend/vue3/vitepress-medium-zoom
import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import './index.css'

let zoomInstance: ReturnType<typeof mediumZoom> | null = null

export default {
  ...DefaultTheme,
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

/// <reference types="vite/client" />

import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import mermaid from 'mermaid'
import './index.css' // 引入自定义样式

// 引入您的自定义组件
// import VocabHover from './components/VocabHover.vue'

// --- VitePress 主题导出 ---

export default {
  ...DefaultTheme,

  enhanceApp({ app }: { app: import('vue').App }) {
    // 注册您的全局组件
    // app.component('VocabHover', VocabHover);

    // 在客户端初始化 Mermaid，但不自动渲染
    if (!import.meta.env.SSR) {
      mermaid.initialize({ startOnLoad: false });
    }
  },

  setup() {
    const route = useRoute();
    let zoomInstance: ReturnType<typeof mediumZoom> | null = null;

    /**
     * 统一处理所有需要在 DOM 更新后执行的客户端库
     */
    const updateDOM = async () => {
      // 更新图片缩放和 Mermaid
      if (zoomInstance) zoomInstance.detach();
      zoomInstance = mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' });
      await mermaid.run();
    };

    // 页面首次加载时执行
    onMounted(updateDOM);

    // 每次路由切换（页面跳转）时，在 DOM 更新后执行
    watch(() => route.path, () => nextTick(updateDOM));
  }
};


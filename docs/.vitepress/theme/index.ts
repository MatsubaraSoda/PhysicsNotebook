/// <reference types="vite/client" />

import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import mermaid from 'mermaid'
import './index.css' // 引入自定义样式

// 引入您的自定义组件
// import VocabHover from './components/VocabHover.vue'

// --- MathJax 全局配置与加载 (只加载一次) ---

let isMathJaxLoaded = false
const onMathJaxReady = new Promise<void>((resolve) => {
  if (import.meta.env.SSR) return; // 不在服务端执行

  // 1. 设置全局配置，MathJax 加载后会自动读取
  (window as any).MathJax = {
    tex: {
      // --- 配置选项 1: 同时支持 $ 和 \( --- (当前启用)
      // 推荐使用此配置，以便统一处理所有文章中的公式。
      // inlineMath: [['$', '$'], ['\\(', '\\)']],
      // displayMath: [['$$', '$$'], ['\\[', '\\]']],

      // --- 配置选项 2: 仅支持 \( 和 \[ ---
      // 如果您希望 $ 符号不被渲染为公式（例如，用于表示价格），请使用此配置。
      // 要启用，请取消注释下面的两行，并注释掉上面的两行。
      inlineMath: [['\\(', '\\)']],
      displayMath: [['\\[', '\\]']],
    },
    chtml: {
      fontURL: '/mathjax3/fonts/woff-v2', // 本地字体路径
      // fontURL: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2', // CDN 字体路径
    }
  };

  // 2. 仅在浏览器环境中动态加载本地 MathJax 脚本和样式
  // 【关键修复】手动注入 CSS 以解决“半成品”渲染问题
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/mathjax3/tex-chtml.css';
  document.head.appendChild(link);

  const script = document.createElement('script');
  // script.src = '/mathjax3/tex-mml-chtml.js'; // 本地脚本路径 // chtml 版本的块状公式会出现多余的空白行在底部
  script.src = '/mathjax3/tex-svg.js';
  // script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js'; // CDN 脚本路径
  script.async = true;
  script.id = 'mathjax-script';
  script.onload = () => {
    isMathJaxLoaded = true;
    resolve();
  };
  script.onerror = () => {
    console.error("MathJax script failed to load.");
  };
  document.head.appendChild(script);
});

/**
 * 异步渲染页面中的数学公式
 */
async function renderMathJax() {
  if (!isMathJaxLoaded) {
    await onMathJaxReady;
  }
  if ((window as any).MathJax && (window as any).MathJax.typesetPromise) {
    await (window as any).MathJax.typesetPromise();
  }
}

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
      // 1. 更新图片缩放和 Mermaid
      if (zoomInstance) zoomInstance.detach();
      zoomInstance = mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' });
      await mermaid.run();

      // 2. 【核心】根据路由判断是否渲染数学公式
      const decodedPath = decodeURIComponent(route.path);

      // 渲染数学公式
      if (decodedPath.startsWith('/playground')) {
        await renderMathJax();
      }
    };

    // 页面首次加载时执行
    onMounted(updateDOM);

    // 每次路由切换（页面跳转）时，在 DOM 更新后执行
    watch(() => route.path, () => nextTick(updateDOM));
  }
};


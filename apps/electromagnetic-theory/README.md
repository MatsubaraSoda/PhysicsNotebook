# my-template

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## MathJax 集成

项目已集成 MathJax 3.x，用于渲染数学公式。

### 使用方法

1. **行内公式**：使用 `$...$` 或 `\(...\)`
   ```html
   <p>公式：$E = mc^2$</p>
   ```

2. **块级公式**：使用 `$$...$$` 或 `\[...\]`
   ```html
   <p>$$\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$$</p>
   ```

3. **在 Vue 组件中使用**：
   ```vue
   <script setup lang="ts">
   import { useMathJax } from './composables/useMathJax'
   
   useMathJax() // 自动渲染组件内的数学公式
   </script>
   ```

### CDN 来源

- 使用 jsdelivr CDN：`https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js`
- 配置位于 `index.html` 中

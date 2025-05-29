import { withMermaid } from "vitepress-plugin-mermaid"
import { defineConfig } from 'vitepress'

export default withMermaid(

// https://vitepress.dev/reference/site-config
defineConfig({
  lang: 'zh-CN',
  title: '松原苏打的笔记',
  description: '',
  head: [['link', { rel: 'icon', href: 'logo.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' }
    ],

    logo: '/logo.png',

    // https://vitepress.dev/zh/reference/default-theme-config#docfooter
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '关闭夜间模式',
    darkModeSwitchTitle: '打开夜间模式',
    outlineTitle: '页面导航',
    returnToTopLabel: '返回顶部',
    outline: {
      level: [2, 3]
    },

    sidebar: {
      '/物理学': [
        {
          text: '力学',
          link: '/物理学/力学/质点运动学',
          items: [
            { text: '质点运动学', link: '/物理学/力学/质点运动学' },
            { text: '质点动力学', link: '/物理学/力学/质点动力学' },
            { text: '刚体的平动与转动', link: '/物理学/力学/刚体的平动与转动' },
            { text: '中心力', link: '/物理学/力学/中心力' },
            { text: '引力', link: '/物理学/力学/引力' },
            { text: '静力学 ⚖️',
              items: [
                { text: '一般原则', link: '/物理学/力学/静力学/一般原则' },
                { text: '力向量', link: '/物理学/力学/静力学/力向量' },
                { text: '质点的平衡', link: '/物理学/力学/静力学/质点的平衡' },
              ],
            },
          ],
        },
      ],
      '/化学': [
        {
          text: '第1章',
          link: '/化学/第1章/测试',
          items: [
            { text: '测试', link: '/化学/第1章/测试' },
          ],
        },
      ]
    },



    socialLinks: [
      { icon: 'github', link: 'https://github.com/MatsubaraSoda' }
    ]

  },

  markdown: {
    math: true
  }
})

)

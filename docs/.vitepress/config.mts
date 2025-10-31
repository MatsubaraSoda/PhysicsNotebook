import { defineConfig } from 'vitepress'
// .vitepress/config.js

// https://emersonbottero.github.io/vitepress-plugin-mermaid/
import { withMermaid } from "vitepress-plugin-mermaid";

// import mathjax3 from 'markdown-it-mathjax3'

export default withMermaid(

  // https://vitepress.dev/reference/site-config
  defineConfig({
    lang: 'zh-CN',
    title: '物理学笔记',
    description: '',
    head: [
      ['link', { rel: 'icon', href: '/logo.png' }],
    ],
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: '主页', link: '/' },
        { text: '旧博客', link: 'https://matsubarasoda.github.io/' },
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
        level: [2, 4]
      },

      // 添加本地搜索功能
      search: {
        provider: 'local',
        options: {
          locales: {
            root: {
              translations: {
                button: {
                  buttonText: '搜索文档',
                  buttonAriaLabel: '搜索文档'
                },
                modal: {
                  noResultsText: '无法找到相关结果',
                  resetButtonTitle: '清除查询条件',
                  footer: {
                    selectText: '选择',
                    navigateText: '切换',
                    closeText: '关闭'
                  }
                }
              }
            }
          }
        }
      },

      sidebar: {
        '/物理学': [
          {
            text: '力学',
            // link: '/物理学/力学/质点运动学',
            items: [
              { text: '质点运动学', link: '/物理学/力学/质点运动学' },
              { text: '质点动力学', link: '/物理学/力学/质点动力学' },
              { text: '刚体的平动与转动', link: '/物理学/力学/刚体的平动与转动' },
              { text: '中心力', link: '/物理学/力学/中心力' },
              { text: '引力', link: '/物理学/力学/引力' },
              {
                text: '静力学 ⚖️',
                items: [
                  { text: '一般原则', link: '/物理学/力学/静力学/一般原则' },
                  { text: '力向量', link: '/物理学/力学/静力学/力向量' },
                  { text: '质点的平衡', link: '/物理学/力学/静力学/质点的平衡' },
                  { text: '力系的合力与合力矩', link: '/物理学/力学/静力学/力系的合力与合力矩' },
                  { text: '刚体的平衡', link: '/物理学/力学/静力学/刚体的平衡' },
                  { text: '结构分析', link: '/物理学/力学/静力学/结构分析' },
                  { text: '内力', link: '/物理学/力学/静力学/内力' },
                  { text: '摩擦力', link: '/物理学/力学/静力学/摩擦力' },
                  { text: '重心和质心', link: '/物理学/力学/静力学/重心和质心' },
                  { text: '惯性矩', link: '/物理学/力学/静力学/惯性矩'},
                  { text: '虚功', link: '/物理学/力学/静力学/虚功'}
                ],
              },
            ],
          },
          {
            text: '电磁学',
            items: [
              {
                text: '电路基础 💡',
                items: [
                  { text: '基本概念', link: '/物理学/电磁学/电路基础/基本概念' },
                  { text: '电路理论', link: '/物理学/电磁学/电路基础/电路理论' },
                  { text: '运算放大器', link: '/物理学/电磁学/电路基础/运算放大器' },
                  { text: '电容器和电感器', link: '/物理学/电磁学/电路基础/电容器和电感器' },
                  { text: '一阶电路', link: '/物理学/电磁学/电路基础/一阶电路' },
                  { text: '二阶电路', link: '/物理学/电磁学/电路基础/二阶电路' },
                  { text: '正弦量与相量', link: '/物理学/电磁学/电路基础/正弦量与相量' },
                  { text: '交流电路功率分析', link: '/物理学/电磁学/电路基础/交流电路功率分析' },
                ]
              }
            ]
          }
        ],
        // 暂时注释掉化学和日语的侧边栏配置
        // '/化学': [
        //   {
        //     text: '大学化学',
        //     link: '/化学/大学化学',
        //     items: [
        //       { text: 'Overview', link: '/化学/大学化学/Overview' },
        //       { text: '基本假设', link: '/化学/大学化学/基本假设' },
        //       { text: '基本对象', link: '/化学/大学化学/基本对象' },
        //     ],
        //   },
        // ],
        // '/日语': [
        //   {
        //     text: '日语',
        //     link: '/日语/五十音',
        //     items: [
        //       { text: '五十音', link: '/日语/五十音' },
        //       { text: '品词', link: '/日语/品词' },
        //       { text: '用言', link: '/日语/用言' },
        //       { text: '敬语', link: '/日语/敬语' },
        //     ],
        //   },
        //   {
        //     text: '新标日高级上',
        //     // link: '/日语/新标日高级上/食',
        //     items: [
        //       { text: '食', link: '/日语/新标日高级上/食' },
        //       { text: '習慣', link: '/日语/新标日高级上/習慣' },
        //       { text: '衣服', link: '/日语/新标日高级上/衣服' },
        //       { text: '営業', link: '/日语/新标日高级上/営業' },
        //       { text: '芸術', link: '/日语/新标日高级上/芸術' },
        //       { text: '音楽', link: '/日语/新标日高级上/音楽' },
        //       { text: 'スポーツ', link: '/日语/新标日高级上/スポーツ' },
        //       { text: 'メセナ', link: '/日语/新标日高级上/メセナ' },
        //       { text: '自然災害', link: '/日语/新标日高级上/自然災害' },
        //       { text: '資源', link: '/日语/新标日高级上/資源' },
        //       { text: 'エネルギー', link: '/日语/新标日高级上/エネルギー' },
        //       { text: 'CSR', link: '/日语/新标日高级上/CSR' },
        //     ]
        //   }
        // ],
      },



      socialLinks: [
        { icon: 'github', link: 'https://github.com/MatsubaraSoda/Notebook' }
      ]

    },

    // 数学公式
    markdown: {
      math: true,
    },
    // markdown: {
    //   config: (md) => {
    //     md.use(mathjax3)
    //   }
    // },

    // https://mermaid.live/ 在线 mermaid 编辑器
    // optionally, you can pass MermaidConfig
    mermaid: {
      // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
    },
    // optionally set additional config for plugin itself with MermaidPluginConfig
    mermaidPlugin: {
      class: "mermaid my-class", // set additional css classes for parent container
    },
    
  })

)
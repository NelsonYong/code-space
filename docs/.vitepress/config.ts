import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Code Space",
  description: "",
  base: process.env.BASE_URL,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '数据结构', link: '/data-structure/' },
      { text: '算法', link: '/markdown-examples' },
      { text: 'ES6+', link: '/markdown-examples' },
      { text: 'React', link: '/markdown-examples' },
      { text: 'Vue3', link: '/markdown-examples' },
      // { text: 'React native', link: '/markdown-examples' },
      // { text: 'uniapp', link: '/markdown-examples' },
      { text: '服务端渲染', link: '/markdown-examples' },
      { text: '前端构建工具', link: '/markdown-examples' },
      { text: 'Golang', link: '/markdown-examples' },
      { text: '数据库', link: '/markdown-examples' },

    ],
    sidebar: [
      {
        text: '数据结构专题',
        link: "/data-structure/",
        items: [
          {
            text: '数组', items: [
              {
                text: '数组介绍', link: '/data-structure/array/'
              }
            ]
          },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

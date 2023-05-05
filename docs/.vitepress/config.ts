import { defineConfig } from 'vitepress'
import routers from './routers'
import { packageIcon } from './icon'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Code Space",
  description: "",
  base: process.env.BASE_URL,
  lang: "zh-CN",
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: packageIcon,
      },
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,height=device-height, maximum-scale=1.0,minimum-scale=1.0',
      },
    ],
  ],
  themeConfig: {
    logo: packageIcon,
    search: {
      provider: "algolia",
      options: {
        appId: 'RS3V8EG9OW',
        apiKey: '070eb1018943852e82c7a73b902be1f3',
        indexName: 'code-space-search',
        placeholder: "请输入搜索的关键词",
        translations: {
          button: {
            buttonText: "搜索",
          }
        }


      }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '数据结构', link: '/data-structure/' },
      { text: '算法专题', link: '/algorithm/' },
      { text: 'ES6+', link: '/markdown-examples' },
      { text: 'React', link: '/markdown-examples' },
      { text: 'Vue3', link: '/markdown-examples' },
      { text: '服务端渲染', link: '/markdown-examples' },
      { text: '前端构建工具', link: '/markdown-examples' },
      { text: 'Golang', link: '/markdown-examples' },
      { text: '数据库', link: '/markdown-examples' },

    ],
    sidebar: routers,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

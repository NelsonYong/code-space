import { DefaultTheme } from "vitepress";

const rust: DefaultTheme.Sidebar = [{
  text: 'Rust 专题',
  link: "rust/",
  items: [
    {
      text: "基础",
      collapsed: true,
      items: [
        {
          text: "创建一个 rust 项目",
          link: "/rust/create/"
        },
        // {
        //   text: "二维数组的查找",
        //   link: "/algorithm/search/two-dimension-array"
        // },
        // {
        //   text: "旋转数组的最小数字",
        //   link: "/algorithm/search/rotate-array-min"
        // }
      ]
    },
    {
      text: "跨端技术",
      collapsed: true,
      items: [
        {
          text: "WebAssembly",
          link: "/rust/wasm/"
        },
        // {
        //   text: "二维数组的查找",
        //   link: "/algorithm/search/two-dimension-array"
        // },
        // {
        //   text: "旋转数组的最小数字",
        //   link: "/algorithm/search/rotate-array-min"
        // }
      ]
    }


  ]
}]

export default rust
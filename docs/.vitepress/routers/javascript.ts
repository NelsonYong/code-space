import { DefaultTheme } from "vitepress";

const javascript_route: DefaultTheme.Sidebar = [{
  text: 'Javascript 专题',
  link: "/javascript/",
  items: [
    {
      text: "设计模式",
      collapsed: true,
      // items: [
      //   {
      //     text: "查找-概览",
      //     link: "/algorithm/search/"
      //   },
      //   {
      //     text: "二维数组的查找",
      //     link: "/algorithm/search/two-dimension-array"
      //   },
      //   {
      //     text: "旋转数组的最小数字",
      //     link: "/algorithm/search/rotate-array-min"
      //   }
      // ]
    },


  ]
}]

export default javascript_route
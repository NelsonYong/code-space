import { DefaultTheme } from "vitepress";

const algorithm_route: DefaultTheme.Sidebar = [{
  text: '算法专题',
  link: "/algorithm/",
  items: [
    {
      text: "查找",
      collapsed: true,
      items: [
        {
          text: "查找-概览",
          link: "/algorithm/search/"
        },
        {
          text: "二维数组的查找",
          link: "/algorithm/search/two-dimension-array"
        },
        {
          text: "旋转数组的最小数字",
          link: "/algorithm/search/rotate-array-min"
        }
      ]
    },


  ]
}]

export default algorithm_route
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
          link: "/algorithm/search"
        }
      ]
    },


  ]
}]

export default algorithm_route
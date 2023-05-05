import { DefaultTheme } from "vitepress";

const data_structure_route: DefaultTheme.Sidebar = [{
  text: '数据结构专题',
  link: "/data-structure/",
  items: [
    {
      text: "二叉树",
      collapsed: true,
      items: [
        {
          text: "二叉树-概况",
          link: "/data-structure/binary-tree/"
        }
      ]
    },
    {
      text: "链表",
      collapsed: true,
      items: [{
        text: "链表介绍", link: "/data-structure/linked-list"
      }]
    },
    {
      text: '数组',
      collapsed: true,
      items: [
        {
          text: '数组介绍', link: '/data-structure/array/'
        }
      ]
    },

  ]
}]

export default data_structure_route
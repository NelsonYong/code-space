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
        },
        {
          text: "二叉树-基本操作",
          link: "/data-structure/binary-tree/basic"
        },
        {
          text: "二叉树的前序遍历",
          link: "/data-structure/binary-tree/pre-order"
        }, {
          text: "二叉树的中序遍历",
          link: "/data-structure/binary-tree/in-order"
        }, {
          text: "二叉树的后序遍历",
          link: "/data-structure/binary-tree/post-order"
        }, {
          text: "重建二叉树",
          link: "/data-structure/binary-tree/re-construct-binaryTree"
        }
      ]
    },
    {
      text: "链表",
      collapsed: true,
      items: [{
        text: "链表介绍", link: "/data-structure/linked-list/"
      }, {
        text: "从尾到头打印链表", link: "/data-structure/linked-list/从尾到头打印链表"
      }, {
        text: "反转链表", link: "/data-structure/linked-list/反转链表"
      }]
    },
    {
      text: '数组',
      collapsed: true,
      items: [
        {
          text: '数组-概览', link: '/data-structure/array/'
        }
      ]
    },

  ]
}]

export default data_structure_route
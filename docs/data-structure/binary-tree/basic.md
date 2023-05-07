# 完全二叉树的一些公式

1.第 n 层的节点数最多为 2n 个节点

2.n 层二叉树最多有 20+...+2n=2n+1-1 个节点

3.第一个非叶子节点：length/2

4.一个节点的孩子节点：2n、2n+1

## 基本结构

插入，遍历，深度

这是一颗由小到大的完全二叉树，比当前节点小就先放到 left，大则放到 right

```js
// 定义一个节点，包含自身的数据data，以及它的左边节点，右边节点
function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
}

// 在原型上绑定展示数据的方法
Node.prototype = {
  show: function () {
    console.log(this.data);
  },
};

// 初始化一棵树
function Tree() {
  this.root = null;
}

Tree.prototype = {
  // 插入
  insert: function (data) {
    // 新增一个新的节点
    var node = new Node(data, null, null);
    // 如果根节点为空，则当前节点为新节点
    if (!this.root) {
      this.root = node;
      return;
    }
    // 帮助我们在二叉搜索树中遍历找到待插入节点的插入位置，并且还能够保留根节点的引用，从而确保修改后的树结构可以正确地反映在根节点上。
    var current = this.root;
    var parent = null;
    // 循环节点
    while (current) {
      parent = current;
      // 从左到右查询，父节点一定是小于子节点，此处证明data的层级应该比 parent 高
      if (data < parent.data) {
        current = current.left;
        if (!current) {
          parent.left = node;
          return;
        }
      } else {
        // data >= parent.data，
        current = current.right;
        if (!current) {
          parent.right = node;
          return;
        }
      }
    }
  },

  // 前序遍历，递归调用preOrder链式访问节点
  preOrder: function (node) {
    if (node) {
      node.show();
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  },
  // 中序遍历
  middleOrder: function (node) {
    if (node) {
      this.middleOrder(node.left);
      node.show();
      this.middleOrder(node.right);
    }
  },
  // 后序遍历
  laterOrder: function (node) {
    if (node) {
      this.laterOrder(node.left);
      this.laterOrder(node.right);
      node.show();
    }
  },
  // 最小值
  getMin: function () {
    var current = this.root;
    while (current) {
      if (!current.left) {
        return current;
      }
      current = current.left;
    }
  },

  // 最大值
  getMax: function () {
    var current = this.root;
    while (current) {
      if (!current.right) {
        return current;
      }
      current = current.right;
    }
  },
  // 在遍历二叉树时计算每个节点的深度，并不断更新最大深度，最终返回整棵树的最大深度。其中，变量 deep 扮演了累加器的角色，用于记录当前节点的深度。如果当前节点为空，则递归结束，直接返回当前节点所在的深度；
  // 否则会依次递归计算左右子树的深度，并将其深度与 deep 进行比较取最大值，从而得到整棵树的最大深度。
  getDeep: function (node, deep) {
    deep = deep || 0;
    if (node == null) {
      return deep;
    }
    deep++;
    var dleft = this.getDeep(node.left, deep);
    var dright = this.getDeep(node.right, deep);
    return Math.max(dleft, dright);
  },
};
```

```js
var t = new Tree();
// root 根节点
t.insert(3);
// 8 > 3所以放到root.right
t.insert(8);
// 1<3 放到 root.left
t.insert(1);
// 判断 root.left,root.left 有值为1，将此节点作为根节点， 当前值为2，2>1,所以值为1的节点的 right为2
t.insert(2);
t.insert(5);
t.insert(7);
t.insert(6);
t.insert(0);
console.log(t);
// t.middleOrder(t.root);
console.log(t.getMin(), t.getMax());
console.log(t.getDeep(t.root, 0));
console.log(t.getNode(5, t.root));
```

## 树查找

二分查找

```js
function getNode(data, node) {
  if (node) {
    if (data === node.data) {
      return node;
    } else if (data < node.data) {
      return this.getNode(data, node.left);
    } else {
      return this.getNode(data, node.right);
    }
  } else {
    return null;
  }
}
```

## 二分查找

二分查找的条件是必须是有序的线性表。

和线性表的中点值进行比较，如果小就继续在小的序列中查找，如此递归直到找到相同的值。

折半查找，取有序数组的中间部分，判断目标值在哪部分，比如 `[1,2,3,4,5,6,7]`，目标值 `2`,中间值为 4 > 2,取数组 `[1,2,3]`,取中间值 `2` 查找成功

```js
function binarySearch(data, arr, start, end) {
  if (start > end) {
    return -1;
  }
  var mid = Math.floor((end + start) / 2);
  if (data == arr[mid]) {
    return mid;
  } else if (data < arr[mid]) {
    return binarySearch(data, arr, start, mid - 1);
  } else {
    return binarySearch(data, arr, mid + 1, end);
  }
}
var arr = [0, 1, 1, 1, 1, 1, 4, 6, 7, 8];
console.log(binarySearch(1, arr, 0, arr.length - 1));
```

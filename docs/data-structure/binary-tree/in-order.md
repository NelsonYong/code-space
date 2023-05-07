# 二叉树的中序遍历

中序遍历（In-order traversal）：从根节点开始，按照“左子树->根节点->右子树”的顺序遍历树的所有节点。即先访问当前节点的左子节点，然后是当前节点本身，最后是右子节点。

## 题目

```js
输入: [1,null,2,3]
   1
    \
     2
    /
   3
输出: [1,3,2]


```

## 代码

递归实现,按照“根节点->左子树->右子树”的顺序遍历树

```js
var preorderTraversal = function (root, array = []) {
  if (root) {
    // 第一个节点一定是左节点递归，当进入到左节点的时候，重复上述操作
    preorderTraversal(root.left, array);
    // 根节点
    array.push(root.val);
    // 左节点递归完逐层返回的时候进入右节点
    preorderTraversal(root.right, array);
  }
  return array;
};
```

- 非递归实现

取根节点为目标节点，开始遍历

- 1.左孩子入栈 -> 直至左孩子为空的节点
- 2.节点出栈 -> 访问该节点
- 3.以右孩子为目标节点，再依次执行 1、2、3

```js
var preorderTraversal = function (root) {
  //  保存结果
  const result = [];
  // 保存节点数
  const stack = [];
  let current = root;
  // 循环栈和树
  while (current || stack.length > 0) {
    // 左根右，会一直去查询左节点
    while (current) {
      // 将根节点入栈
      stack.push(current);
      // 取树的左节点引用，为根节点
      current = current.left;
    }
    // 当树的第一遍左节点完成后，出栈的节点树为第一个叶子节点的根节点，同理，一层一层出栈类似于递归函数，一层一层出函数栈执行
    current = stack.pop();
    // 先存入根节点的值
    result.push(current.val);
    // 取树的右节点引用，为根节点，重复上述操作
    current = current.right;
  }
  return result;
};
```

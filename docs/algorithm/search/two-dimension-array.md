# 二维数组的查找

## 题目

在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

## 基本思路

二维数组是有序的，比如下面的数据：

```
1 2 3
4 5 6
7 8 9
```

可以直接利用左下角数字开始查找：

7 大于 目标值：比较上移

7 小于 目标值：比较右移

然后将 7 替换成转移成移动的点

## 代码思路

将二维数组看作平面坐标系

从左下角（0,arr.length-1）开始比较：

目标值大于坐标值---x 坐标+1

目标值小于坐标值---y 坐标-1

注意：

二维数组 arr[i][j]中

j 代表 x 坐标

i 代表 y 坐标

```js
function Find(target, array) {
  let i = array.length - 1; // y坐标
  let j = 0; // x坐标
  return compare(target, array, i, j);
}

function compare(target, array, i, j) {
  if (array[i] === undefined || array[i][j] === undefined) {
    return false;
  }
  const temp = array[i][j];
  if (target === temp) {
    return true;
  } else if (target > temp) {
    return compare(target, array, i, j + 1);
  } else if (target < temp) {
    return compare(target, array, i - 1, j);
  }
}
```

## 拓展：二分查找

二分查找的条件是必须有序。

和线性表的中点值进行比较，如果小就继续在小的序列中查找，如此递归直到找到相同的值。

这里的关键点，以下对比的 arr 是一维数组，循环二维数组，将一维数组进行 `binarySearch`

```js
function binarySearch(data, arr, start, end) {
  if (start > end) {
    return -1;
  }
  // 取中间值
  var mid = Math.floor((end + start) / 2);
  if (data == arr[mid]) {
    return mid;
  } else if (data < arr[mid]) {
    return binarySearch(data, arr, start, mid - 1);
  } else {
    return binarySearch(data, arr, mid + 1, end);
  }
}
```

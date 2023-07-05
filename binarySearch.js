/**
 * 二分查找两个主要问题
 *
 * while 条件到底是 <= 还是 <
 * arr[middle] > target 时，right 赋值 middle 还是 middle-1
 *
 * 主要取决于区间，常见的有左闭右闭和左闭右开
 */

const arr = [1, 2, 3, 4, 5]
const target = 4

function leftCloseRightClose(arr, target) {
  let left = 0
  let right = arr.length - 1

  // <= 取决于左闭右闭 [1,1]
  while (left <= right) {
    const middle = left + ((right - left) >> 1)

    if (arr[middle] > target) {
      // 由于右闭并且middle已经比较过，后面更新的区间右边界不需要包含middle
      right = middle - 1
    } else if (arr[middle] < target) {
      // 由于左闭并且middle已经比较过，后面更新的区间左边界不需要包含middle
      left = middle + 1
    } else {
      return middle
    }
  }

  return -1
}

function leftCloseRightOpen(arr, target) {
  // 现在区间左闭右开例如 [1,1) 因此：
  let left = 0
  let right = arr.length

  // 左闭右开所以条件为 left < right [1,1)
  while (left < right) {
    const middle = left + ((right - left) >> 1)

    if (arr[middle] > target) {
      // 中间大于目标，更新左区间右边界，但是右边界取不到如果还赋值 middle-1 那么 middle-1 无法进行判读
      right = middle
    } else if (arr[middle] < target) {
      // left是闭区间并且之前已经判断过middle
      left = middle + 1
    } else {
      return middle
    }
  }

  return -1
}

console.log(leftCloseRightClose(arr, target))
console.log(leftCloseRightOpen(arr, target))

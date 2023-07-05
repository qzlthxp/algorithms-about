/**
 * 在给定数组中，删除目标元素并且返回数组长度
 */

const arr = [1, 2, 3, 4, 3, 5]
const target = 3

function arrDel(arr, target) {
  let fast = 0
  let slow = 0

  for (let fast = 0; fast < arr.length; fast++) {
    if (arr[fast] !== target) {
      arr[slow++] = arr[fast]
    }
  }
  console.log(arr)
  return slow
}

console.log(arrDel(arr, target))

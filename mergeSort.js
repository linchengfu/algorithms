/**
 * 归并排序
 * 把问题递归拆分为一个个子问题
 * @param {*} left
 * @param {*} right
 * @returns
 */
const merge = (left, right) => {
  const mergedArr = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      mergedArr.push(left.shift())
    } else {
      mergedArr.push(right.shift())

    }
  }

  while (left.length > 0) {
    mergedArr.push(left.shift())
  }

  while (right.length > 0) {
    mergedArr.push(right.shift())
  }

  return mergedArr
}

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr

  const mid = Math.floor(arr.length / 2)

  const left = arr.slice(0, mid),
    right = arr.slice(mid);

  const mergedLeft = mergeSort(left),
    mergedRight = mergeSort(right)

  return merge(mergedLeft, mergedRight)

}

const res = mergeSort([9, 2, 3, 4, 2, 0, 1])

console.log(res)
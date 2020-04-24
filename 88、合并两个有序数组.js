/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  // 定义三个指针
  let p1 = m - 1,
    p2 = n - 1,
    p3 = m + n - 1;

  // 遍历
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] <= nums2[p2]) {
      nums1[p3] = nums2[p2];
      p3--;
      p2--;
    } else {
      nums1[p3] = nums1[p1];
      p3--;
      p1--;
    }
  }

  // 如果 nums 提前遍历完毕，把所有 nums2 拼接到 nums1 前
  while (p2 >= 0) {
    nums1[p3] = nums2p[p2]
    p2--;
    p3--;
  }
  return nums1;
};

let num = merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
console.log(num);

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  return nums1.slice(0,m).concat(nums2).sort((a,b)=>a-b)
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
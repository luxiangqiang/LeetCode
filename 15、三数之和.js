/**
 * 解法一：暴力破解法
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          res.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return res;
};

/**
 * 解法二：哈希表优化
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var res = [];
  var map = new Map();
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      let item = 0 - nums[i] - nums[j];
      if (map.has(item)) {
        res.push([item, nums[i], nums[j]]);
      } else {
        map.set(item, 1);
      }
    }
  }
  return res;
};

/**
 * 解法三：排序 + 双指针(去重)
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var res = [];
  var len = nums.length;
  // 判断特殊情况
  if (nums == null || len < 3) return res;
  nums.sort((a, b) => a - b); // 从小到大排序
  for (let i = 0; i < len; i++) {
    // 如果固定的数为正整数,不可能存在为 0 情况
    if (nums[i] > 0) break;
    // 去重(如果下一个固定数和前一个相等,后边会出现重复结果)
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    // 定义左右指针
    let L = i + 1;
    let R = len - 1;
    let min = nums[i] + nums[L] + nums[L + 1];
    if(min > target) continue;
    let max = nums[i] + nums[R] + nums[R - 1];
    if(max < target) continue;
    while (L < R) {
      // 结束遍历条件
      let sum = nums[i] + nums[L] + nums[R];
      if (sum == 0) {
        // 去重
        res.push([nums[i], nums[L], nums[R]]);
        while (L < R && nums[L] == nums[L + 1]) L++;
        while (L < R && nums[R] == nums[R - 1]) R--;
        L++;
        R--;
      } else if (sum < 0) {
        L++;
      } else if (sum > 0) {
        R--;
      }
    }
    return res;
  }
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));


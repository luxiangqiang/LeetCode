/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  var res = [];
  var len = nums.length;
  if (nums == null || len < 4) return res;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len - 3; i++) {
    // 当前循环的四个数大于 target 后边不可能等于 target
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
    // 去重(如果下一个固定数和前一个相等,后边会出现重复结果)
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    // 确定第二个指针的位置
    for (let j = i + 1; j < len - 2; j++) {
      // 去重
      if (j > i + 1 && nums[j] == nums[j - 1]) continue;
      // 定义第三/四个指针
      let L = j + 1;
      let R = len - 1;
      while (L < R) {
        let sum = nums[i] + nums[j] + nums[L] + nums[R];
        if (sum == target) {
          res.push([nums[i], nums[j], nums[L], nums[R]]);
        }
        if (sum < target) {
          while (nums[L] === nums[++L]);
        } else {
          while (nums[R] === nums[--R]);
        }
      }
    }
  }
  return res;
};

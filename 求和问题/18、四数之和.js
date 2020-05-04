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
    // 去重(如果下一个固定数和前一个相等,后边会出现重复结果)
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    //计算当前的最小值，如果最小值都比target大，不用再继续计算了
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
    //计算当前最大值，如果最大值都比target小，不用再继续计算了
    if (nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target)
      continue;
    // 确定第二个指针的位置
    for (let j = i + 1; j < len - 2; j++) {
      // 去重
      if (j > i + 1 && nums[j] == nums[j - 1]) continue;
      // 定义第三/四个指针
      let L = j + 1;
      let R = len - 1;
      //计算当前的最小值，如果最小值都比target大，不用再继续计算了
      let min = nums[i] + nums[j] + nums[L] + nums[L + 1];
      if (min > target) continue;
      //计算当前最大值，如果最大值都比target小，不用再继续计算了
      let max = nums[i] + nums[j] + nums[R] + nums[R - 1];
      if (max < target) continue;
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

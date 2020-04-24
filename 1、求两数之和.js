/**
 * 解法一:暴力破解
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // 判断数组为空的情况
  if (nums == null || nums.length == 1) {
    return [];
  }
  for (let i = 0; i < nums.length; i++) {
    let item = nums[i];
    if (nums.indexOf(target - item, i + 1) !== -1) {
      return [i, nums.indexOf(target - item, i + 1)];
    }
  }
  return [];
};

/**
 * 解法二:两遍哈希表法
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum2 = function(nums, target) {
  // 将值存储到哈希表中
  let map = new Map();
  // 存储
  nums.forEach((item,index) => {
    map.set(item, index);
  });
  // 判断
  for (let i = 0; i < nums.length; i++) {
    let item = nums[i];
    console.log(map.get(target - item))
    if (map.has(target - item) &&  map.get(target - item) !== i) {
      return [i, map.get(target - item)];
    }
  }
  return [];
};

var twoSum3 = function(nums, target) {
  // 将值存储到哈希表中
  let map = new Map();
  // 存储
  for (let i = 0; i < nums.length; i++) {
    let item = nums[i];
    if (map.has(target - item) && map.get(target - item) !== i) {
      return [map.get(target - item), i];
    }
    map.set(item, i);
  }
  return [];
};

console.log(twoSum2([2,7,11,15],9))



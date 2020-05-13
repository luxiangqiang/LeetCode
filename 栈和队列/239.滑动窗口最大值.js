/**
 * 方案一：暴力破解法(双指针 + 遍历)
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (k > nums.length || k === 0) return [];

  let res = [],
    maxIndex = -1;
  for (let l = 0, r = k - 1; r < nums.length; l++, r++) {
    // 当前 k 个数中的最大值的索引
    let index = l; // 存储当前 k 元素最大值的索引
    for (let i = l; i <= r; i++) {
      if (nums[i] > nums[index]) index = i;
    }
    maxIndex = index;
    res.push(nums[maxIndex]);
  }
  return res;
};

/**
 * 方案二：双端队列法
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (k > nums.length || k === 0) return [];
   const len = nums.length;
   const res = [];
   const deque = [];

   for(let i = 0; i < len; i++){
    //  队尾元素小于当前元素，出队
    while(deque.length && nums[deque[deque.length - 1]] < nums[i]){
      deque.pop();
    }

    // 当前元素入队
    deque.push(i);

    // 最大值已经滑过
    while(deque.length && deque[0] <= i - k){
      deque.shift();
    }

    // 当遍历完整个滑动窗口内的值，就开始存储当前最大值
    if(i >= k - 1){
      res.push(nums[deque[0]]);
    }
   }
  return res;
};


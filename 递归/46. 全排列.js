/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const len = nums.length;
  const curr = [];
  const res = [];
  const visited = {};

  function dfs(nth) {
    // 递归终止条件
    if (nth == len) {
      res.push(curr.slice());
      return;
    }
    // [1,2,3][1,2,3]
    for (let i = 0; i < len; i++) {
      if (!visited[nums[i]]) {
        visited[nums[i]] = 1;
        curr.push(nums[i]);
        dfs(nth + 1);
        curr.pop();
        visited[nums[i]] = 0;
      }
    }
  }

  dfs(0);
  return res;
};

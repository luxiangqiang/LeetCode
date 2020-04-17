/**
 * @param {string}
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length == 0) return s;
  var count = 0;  // 临时计数器
  var result = 0; // 最终计数器
  var queue = ""; // 滑动队列
  for (let i of s) {
    if (queue.indexOf(i) == -1) {
      queue += i;
      count++;
    } else {
      queue += i;
      queue = queue.slice(queue.indexOf(i) + 1);
      count = queue.length;
    }
    result = count > result ? count : result;
  }
  return result;
};

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  let len = T.length;
  let stack = [];
  let result = new Array(len).fill(0);
  // 遍历数组
  for (let i = 0; i < len; i++) {
    // 判断当前栈是否存在值且当前值是否大于栈的最后一个索引值对应的值
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      let top = stack.pop();
      // 索引相减
      result[top] = i - top;
    }
    stack.push(i);
  }
  return result;
};

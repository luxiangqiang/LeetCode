/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // 边界条件
  if (s == "") return true;

  // 哈希存储
  let obj = {
    "(": ")",
    "{": "}",
    "[": "]"
  };

  // 声明一个栈
  let stack = [];
  // 遍历
  for (let item of s) {
    let len = stack.length;
    if (len == 0) {
      stack.push(item);
    } else {
      if (item == obj[stack[len - 1]]) {
        stack.pop();
      } else {
        stack.push(item);
      }
    }
  }
  return !stack.length;
};

console.log(isValid('([])'));

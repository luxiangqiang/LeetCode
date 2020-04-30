/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let len = s.length;

  // 声明两个指针
  let left = 0;
  let right = len - 1;

  // 判断双指针是否相同
  while(left < right && s[left] == s[right]){
    left++;
    right--;
  }  

  // 若不相同，跳过左指针或者右指针
  if(isPalidrome(left + 1, right)){
    return true;
  }

  if(isPalidrome(left, right - 1)){
    return true;
  }

  // 判断是否为回文字符串
  function isPalidrome(star, end){
    while(star < end){
      if(s[star] !== s[end]){
        return false;
      }
      star++;
      end--;
    }
    return true;
  }

  return false;
};
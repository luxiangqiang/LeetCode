

function isPalindrome(str) { // "babad"
  var len = str.length;
  var middle = parseInt(len / 2);
  for (var i = 0; i < middle; i++) {
    if (str[i] !== str[len - i - 1]) {
      return false;
    }
  }
  return true;
}
var ans = "";
var max = 0;
var len = s.length;
for (var i = 0; i < len; i++) {
  for (var r = i + 1; r <= len; r++) {
    var tmpStr = s.substring(i, r);
    if (isPalindrome(tmpStr) && tmpStr.length > max) {
      ans = s.substring(i, r);
      max = tmpStr.length;
    }
  }
}
return ans;

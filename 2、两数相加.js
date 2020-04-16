/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let curEle = result = new ListNode(0);
  let carry = 0
  while(l1 && l2){
    if(l1){
      sum += l1.val
    }
    if(l2){
      sum += l2.val
    }
    carry = sum > 9 ? 1 : 0
    curEle.next = new ListNode((sum) % 10)
    curEle = curEle.next
  }
  return result.next
};
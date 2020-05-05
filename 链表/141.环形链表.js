/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 方法一：哈希表
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  while(head){
    if(head.flag){
      return true;
    }else{
      head.flag = true;
      head = head.next;
    }
  }
  return false;
};

/**
 * 方法二：双指针
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  // 边界条件判断
  if(head == null || head.next == null) return false;

  let slow = head;
  let fast = head.next;
  
  // 只要不满足两个指针相等，就继续遍历
  while(slow !== fast){
    if(fast == null || fast.next == null){
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
};
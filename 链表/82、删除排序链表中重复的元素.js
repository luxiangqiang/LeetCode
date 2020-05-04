/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  // 如果只有 0 个或一个节点
  if(!head || !head.next) return head;

  // 设置哨兵思想
  let p = new ListNode();
  p.next = head;

  // 遍历所有结点
  let current = p;
  while(p.next && p.next.next){
    if(cur.next.val === cur.next.next.val) {
      let tempVal = current.next.val;
      // 对重复的节点进行删除
      while(current.next && current.next.val == tempVal){
        current.next = current.next.next;
      }
    }else{
      current = current.next;
    }
  }
  return p.next;
};
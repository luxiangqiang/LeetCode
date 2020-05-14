/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];

  let queue = [];
  let res = [];
  queue.push(root);

  // 遍历当前层的节点
  while (queue.length !== 0) {
    let temp = [];
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let root = queue.shift();
      temp.push(root.val);
      if (root.left !== null) {
        queue.push(root.left);
      }
      if (root.right !== null) {
        queue.push(root.right);
      }
    }
    res.push(temp);
  }
  return res;
};

/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
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
  let cur = head//头指针
  while(cur&&cur.next){
    if(cur.val == cur.next.val){
      cur.next = cur.next.next
    }else{
      cur = cur.next
    }
  }
  // console.log(cur,head)
  return head
};
// @lc code=end


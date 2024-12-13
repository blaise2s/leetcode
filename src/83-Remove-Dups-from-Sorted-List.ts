import { ListNode } from './ListNode';

export const removeDuplicatesFromSortedList = (
  head: ListNode | null,
): ListNode | null => {
  let currentNode = head;
  while (currentNode && currentNode.next) {
    const isDuplicate = currentNode.val === currentNode.next.val;
    if (isDuplicate) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }
  return head;
};

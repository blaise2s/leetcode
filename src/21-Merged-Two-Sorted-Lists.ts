import { ListNode } from './ListNode';

// Input: (l1 = [1, 2, 4]), (l2 = [1, 3, 4]);
// Output: [1, 1, 2, 3, 4, 4];

// Input: (l1 = []), (l2 = []);
// Output: [];

// Input: (l1 = []), (l2 = [0]);
// Output: [0];

export const mergeTwoLists = (
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null => {
  if (!l1 && !l2) return null;
  if (!l1) return new ListNode(l2!.val, mergeTwoLists(l1, l2!.next));
  if (!l2) return new ListNode(l1!.val, mergeTwoLists(l1!.next, l2));
  if (l1.val > l2.val) return new ListNode(l2.val, mergeTwoLists(l1, l2.next));
  return new ListNode(l1.val, mergeTwoLists(l1.next, l2));
};

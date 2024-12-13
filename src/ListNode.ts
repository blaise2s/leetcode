/**
 * Singly-linked list node.
 */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  /**
   * Convert ListNode to number array.
   */
  toArray(): number[] {
    const result = [];
    let node: ListNode | null = this;
    while (node) {
      result.push(node.val);
      node = node.next;
    }
    return result;
  }
}

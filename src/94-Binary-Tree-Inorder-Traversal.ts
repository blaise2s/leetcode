import { TreeNode } from './TreeNode';

export const inorderTraversal = (root: TreeNode | null): number[] => {
  const result: number[] = [];
  const stack: TreeNode[] = [];
  let currentNode: TreeNode | null = root;

  while (currentNode || stack.length) {
    while (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    }
    currentNode = stack.pop()!;
    result.push(currentNode.val);
    currentNode = currentNode.right;
  }

  return result;
};

import { TreeNode } from './TreeNode';

const isMirror = (left: TreeNode | null, right: TreeNode | null): boolean => {
  if (!left && !right) return true;
  if (!left || !right) return false;
  return (
    left.val === right.val &&
    isMirror(left.left, right.right) &&
    isMirror(left.right, right.left)
  );
};

export const isSymmetric = (root: TreeNode | null): boolean => {
  if (!root) return true;
  return isMirror(root.left, root.right);
};

import { TreeNode } from './TreeNode';

export const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean => {
  if (!p && !q) return true;
  return (
    p?.val === q?.val &&
    isSameTree(p?.left || null, q?.left || null) &&
    isSameTree(p?.right || null, q?.right || null)
  );
};

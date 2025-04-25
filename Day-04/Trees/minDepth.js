class TreeNode {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

function minDepth(root) {
  if (!root) return 0;

  if (!root.left) 1 + minDepth(root.right);
  if (!root.right) 1 + minDepth(root.left);

  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);

console.log(minDepth(root));

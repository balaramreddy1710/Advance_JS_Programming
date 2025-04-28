class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var isSymmetric = function (root) {
  if (!root) {
    return true;
  }
  return equal(root.left, root.right);
};

function equal(l, r) {
  if (!l && !r) return true;
  if (!l || !r || l.val !== r.val) return false;
  return equal(l.left, r.right) && equal(l.right, r.left);
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(3);

console.log(isSymmetric(root));

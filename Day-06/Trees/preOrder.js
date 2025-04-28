class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var preorderTraversal = function (root) {
  let res = [];

  function pre(node) {
    if (!node) {
      return;
    }
    res.push(node.val);
    pre(node.left);
    pre(node.right);
  }
  pre(root);
  return res;
};

const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

console.log(preorderTraversal(root));

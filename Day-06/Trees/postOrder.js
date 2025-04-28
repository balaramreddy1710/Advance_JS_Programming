class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var postorderTraversal = function (root) {
  let res = [];

  function post(node) {
    if (!node) {
      return;
    }
    post(node.left);
    post(node.right);
    res.push(node.val);
  }
  post(root);
  return res;
};

const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

console.log(postorderTraversal(root));

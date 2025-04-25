class Tree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
function inOrder(node) {
  if (!node) return null;
  inOrder(node.left);
  console.log(node.val);
  inOrder(node.right);
}

function preOrder(node) {
  if (!node) return null;
  console.log(node.val);
  preOrder(node.left);
  preOrder(node.right);
}

function postOrder(node) {
  if (!node) return null;
  postOrder(node.left);
  postOrder(node.right);
  console.log(node.val);
}

let root = new Tree(1);
root.left = new Tree(2);
root.right = new Tree(3);
root.left.left = new Tree(4);
root.left.right = new Tree(5);

console.log("InOrder:");
inOrder(root);
console.log("PreOrder:");
preOrder(root);
console.log("PostOrder:");
postOrder(root);

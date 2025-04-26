class treeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function insertBST(root, val) {
  if (!root) return new treeNode(val);
  if (val < root.val) root.left = insertBST(root.left, val);
  else root.right = insertBST(root.right, val);
  return root;
}

function inOrder(root) {
  if (!root) return null;
  inOrder(root.left);
  console.log(root.val);
  inOrder(root.right);
}

function preOrder(root) {
  if (!root) return null;
  console.log(root.val);
  preOrder(root.left);
  preOrder(root.right);
}

function postOrder(root) {
  if (!root) return null;
  postOrder(root.left);
  postOrder(root.right);
  console.log(root.val);
}

let root = null;
const values = [20, 10, 30, 5, 15, 25, 35];
for (let val of values) {
  root = insertBST(root, val);
}

console.log("Inorder:");
inOrder(root);
console.log("Preorder:");
preOrder(root);
console.log("Postorder:");
postOrder(root);

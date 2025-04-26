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

let root = null;
const values = [20, 10, 30, 5, 15, 25, 35];
for (let val of values) {
  root = insertBST(root, val);
}

console.log(root);

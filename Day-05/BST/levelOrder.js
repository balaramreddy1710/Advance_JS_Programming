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

function levelOrder(root) {
  if (!root) return null;
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    console.log(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}

let root = null;
const values = [20, 10, 30, 5, 15, 25, 35];
for (let val of values) {
  root = insertBST(root, val);
}

console.log("LevelOrder:");
levelOrder(root);

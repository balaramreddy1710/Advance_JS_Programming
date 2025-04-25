class Tree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function levelOrder(root) {
  if (!root) return null;
  let queue = [root];
  while (queue.length) {
    const node = queue.shift();
    console.log(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}

let root = new Tree(1);
root.left = new Tree(2);
root.right = new Tree(3);
root.left.left = new Tree(4);
root.left.right = new Tree(5);

levelOrder(root);

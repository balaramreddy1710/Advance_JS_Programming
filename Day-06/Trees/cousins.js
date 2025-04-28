class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function isCousins(root, x, y) {
  if (!root) return false;

  let queue = [{ node: root, parent: null }];

  while (queue.length) {
    let size = queue.length;
    let xParent = null,
      yParent = null;

    for (let i = 0; i < size; i++) {
      let { node, parent } = queue.shift();
      if (node.val === x) xParent = parent;
      if (node.val === y) yParent = parent;

      if (node.left) queue.push({ node: node.left, parent: node });
      if (node.right) queue.push({ node: node.right, parent: node });
    }

    if (xParent && yParent) {
      return xParent !== yParent;
    }
    if ((xParent && !yParent) || (!xParent && yParent)) {
      return false;
    }
  }

  return false;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.right = new TreeNode(5);

console.log(isCousins(root, 4, 5)); // true

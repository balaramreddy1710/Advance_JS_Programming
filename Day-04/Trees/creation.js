class Tree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let root = new Tree(37);
root.left = new Tree(12);
root.right = new Tree(20);
root.left.left = new Tree(31);
root.left.right = new Tree(19);

console.log(root);

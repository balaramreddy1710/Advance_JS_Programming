class Stack {
  constructor() {
    this.items = [];
  }

  push(val) {
    this.items.push(val);
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }

  display() {
    console.log(this.items.join(" <- "));
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.display();
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());
stack.clear();
console.log(stack.isEmpty());

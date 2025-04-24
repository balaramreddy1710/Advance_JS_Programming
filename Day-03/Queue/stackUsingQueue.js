class Stack {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }

  push(data) {
    this.q2.push(data);

    while (this.q1.length != 0) {
      this.q2.push(this.q1.shift());
    }

    [this.q1, this.q2] = [this.q2, this.q1];
  }

  pop() {
    if (this.q1.length == 0) {
      return;
    }
    this.q1.shift();
  }

  peek() {
    if (this.q1.length == 0) {
      return -1;
    }
    return this.q1[0];
  }

  size() {
    console.log(this.q1.length);
  }

  isEmpty() {
    return this.q1.length == 0;
  }
}

let s = new Stack();
s.push(1);
s.push(2);
s.push(3);

console.log("current size: ");
s.size();
console.log(s.peek());
s.pop();
console.log(s.peek());
s.pop();
console.log(s.peek());

console.log("current size: ");
s.size();

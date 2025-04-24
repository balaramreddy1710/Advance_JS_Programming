class Queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  enqueue(data) {
    this.s1.push(data);
  }

  dequeue() {
    if (!this.s2.length) {
      while (this.s1.length) {
        this.s2.push(this.s1.pop());
      }
    }
    return this.s2.pop();
  }

  peek() {
    if (!this.s2.length) {
      while (this.s1.length) {
        this.s2.push(this.s1.pop());
      }
    }
    return this.s2[this.s2.length - 1];
  }

  empty() {
    return this.s1.length === 0 && this.s2.length === 0;
  }
}

const q = new Queue();

q.enqueue(1);
q.enqueue(2);
console.log(q.peek());
console.log(q.dequeue());
console.log(q.empty());
console.log(q.dequeue());
console.log(q.empty());

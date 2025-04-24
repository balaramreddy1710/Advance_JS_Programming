class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.size = 0;
    this.front = null;
    this.rear = null;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) return null;

    let pop = this.front;
    if (this.front === null) {
      this.rear = null;
    }
    this.size--;
    return pop.data;
  }

  peek() {
    if (this.isEmpty()) return null;
    else {
      return this.front.data;
    }
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  display() {
    let current = this.front;
    let ele = [];
    while (current) {
      ele.push(current.data);
      current = current.next;
    }
    console.log(ele.join("->"));
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.display();

console.log(queue.dequeue());
queue.display();

console.log(queue.peek());
console.log(queue.getSize());
console.log(queue.isEmpty());

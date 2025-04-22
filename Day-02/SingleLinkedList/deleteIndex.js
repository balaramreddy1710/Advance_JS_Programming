class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedL1 {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAt(index, data) {
    if (index === 0) return this.prepend(data);
    const newNode = new Node(data);
    let current = this.head;
    let previous = null;
    let i = 0;
    while (current && i < index) {
      previous = current;
      current = current.next;
      i++;
    }
    if (previous) {
      previous.next = newNode;
      newNode.next = current;
    }
  }

  deleteStart() {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  deleteIndex(index) {
    if (index === 0) return this.deleteStart();
    let current = this.head;
    let prev = null;
    let i = 0;
    while (current && i < index) {
      prev = current;
      current = current.next;
      i++;
    }

    if (current && prev) {
      prev.next = current.next;
    }
  }

  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }
}

let L1 = new LinkedL1();
L1.append(10);
L1.append(15);
L1.append(20);
L1.print();
L1.deleteIndex(1);
L1.print();

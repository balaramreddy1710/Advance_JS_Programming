class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  append(data) {
    const newNode = new Node(data);

    while (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  insertAt(index, data) {
    if (index === 0) return this.prepend(data);
    const newNode = new Node(data);
    let current = this.head;
    let prev = null;
    let i = 0;

    while (current && i < index) {
      prev = current;
      current = current.next;
      i++;
    }

    if (prev) {
      prev.next = newNode;
      newNode.next = current;
      i++;
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
const L1 = new LinkedList();
L1.append(10);
L1.append(20);
L1.append(30);
L1.print();
L1.insertAt(0, 5);
L1.print();
L1.insertAt(2, 15);
L1.print();

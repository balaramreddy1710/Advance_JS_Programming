class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  prepend(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
      return;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }

  insertAt(index, data) {
    if (index === 0) return this.prepend(data);
    const newNode = new Node(data);
    let current = this.head;
    let i = 0;
    while (current && i < index) {
      current = current.next;
      i++;
    }

    if (!current) return this.append(data);
    newNode.prev = current.prev;
    newNode.next = current;
    if (current.prev) current.prev.next = newNode;
    current.prev = newNode;
  }

  print() {
    let current = this.head;
    let res = "";
    while (current) {
      res += current.data + " <-> ";
      current = current.next;
    }
    console.log(res + "null");
  }
}

const D = new DLL();
D.append(10);
D.append(20);
D.append(30);
D.append(40);
D.print();
D.insertAt(2, 25);
D.print();

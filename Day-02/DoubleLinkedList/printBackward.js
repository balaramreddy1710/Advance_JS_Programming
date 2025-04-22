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

  print() {
    let current = this.head;
    let res = "";
    while (current) {
      res += current.data + " <-> ";
      current = current.next;
    }
    console.log(res + "null");
  }

  printBack() {
    let current = this.tail;
    let res = "";
    while (current) {
      res += current.data + " <-> ";
      current = current.prev;
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
D.printBack();

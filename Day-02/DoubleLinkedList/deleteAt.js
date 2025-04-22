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

  deleteAt(index) {
    if (index === 0 && this.head) {
      this.head = this.head.next;
      if (this.head) this.head.next = null;
      else this.tail = null;
      return;
    }

    let current = this.head;
    let i = 0;
    while (current && i < index) {
      current = current.next;
      i++;
    }

    if (!current) return;
    if (current.prev) current.prev.next = current.next;
    if (current.next) current.next.prev = current.prev;
    if (!current.next) this.tail = current.prev;
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
D.deleteAt(2);
D.print();

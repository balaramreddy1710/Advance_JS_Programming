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

  checkPalindrome() {
    let left = this.head;
    let right = this.tail;
    while (left != right && left.prev != right) {
      if (left.data != right.data) return false;
      left = left.next;
      right = right.prev;
    }
    return true;
  }
}

const D = new DLL();
D.append(10);
D.append(20);
D.append(30);
D.append(20);
D.append(10);
D.print();
console.log(D.checkPalindrome());

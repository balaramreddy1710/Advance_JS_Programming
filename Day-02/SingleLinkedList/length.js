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

  length() {
    let current = this.head;
    let i = 0;
    while (current) {
      i++;
      current = current.next;
    }
    return i;
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
L1.append(28);
L1.print();
console.log(L1.length());

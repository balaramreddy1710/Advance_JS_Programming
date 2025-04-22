class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CLL {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
      return;
    }

    let current = this.head;
    while (current.next != this.head) {
      current = current.next;
    }

    current.next = newNode;
    newNode.next = this.head;
  }

  print() {
    if (!this.head) console.log("The list is empty");
    let current = this.head;
    let res = "";
    do {
      res += current.data + " -> ";
      current = current.next;
    } while (current != this.head);
    console.log(res + "(head)");
  }

  search(value) {
    let current = this.head;
    let i = 0;
    do {
      if (current.data === value) return i;
      current = current.next;
      i++;
    } while (current != this.head);
    return -1;
  }
}

const C = new CLL();
C.append(10);
C.append(20);
C.append(30);
C.append(40);
C.append(50);
C.print();
console.log(C.search(30));

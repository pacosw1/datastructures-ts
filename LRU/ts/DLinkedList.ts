class DNode {
  public prev: DNode;
  public next: DNode;
  public val: any;
  public key: any;

  constructor(key: any, val: any) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DLinkedList {
  public head: DNode;
  public tail: DNode;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  addFront(key, val) {
    let newHead = new DNode(key, val);

    if (!this.head) {
      //if our list is empty, head = new Node;
      this.head = new DNode(key, val);
      this.tail = this.head;
    } else {
      //else, we push head to the right, and make newNode the head
      this.head.prev = newHead;
      newHead.next = this.head;
      this.head = newHead;
    }
  }

  moveToFront(node: DNode) {
    let { prev, next } = node;
    if (node == this.tail && node != this.head) {
      //delete node
      node.prev.next = null; //remove node
      this.tail = node.prev; //update tail

      //move prevHead to the right
      this.head.prev = node; //curr head's prev will now be node
      node.next = this.head; //node's next val will now be prevHead

      //update head
      this.head = node; //make head the node
      node.prev = null; //node will be head, so prev = null
    } else if (node == this.head) return;
    //if already head, we do nothing
    else {
      //in between

      prev.next = next; //delete node in list

      next.prev = node.prev; //update prev pointer to skip node

      //push prevHead to the right
      node.next = this.head; //node's next will be actual head
      this.head.prev = node; //actual head's prev will now be node

      //make node the new head
      this.head = node; //node will now be head
      node.prev = null; //since its head, prev will be null
    }
  }

  removeLast() {
    if (this.head == this.tail) return;
    let prev = this.tail.prev;
    prev.next = null;
    //update tail
    this.tail = prev;
  }
}

// let list = new DLinkedList();

// list.addFront(1, 10);
// list.addFront(3, 20);
// list.addFront(4, 50);

// let hash = {};

// hash[4] = list.head;
// hash[3] = list.head.next;
// hash[1] = list.tail;

// list.moveToFront(hash[3]);

// let curr = list.head;

// while (curr) {
//   console.log(curr);
//   curr = curr.next;
// }

// console.log(Object.keys(hash).length);

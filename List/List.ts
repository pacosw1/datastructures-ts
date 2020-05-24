class ListNode {
  public value: any;
  public next: ListNode;

  constructor(val: any) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  public head: ListNode = null;

  exists(val: any): boolean {
    var dummy = this.head;
    while (dummy) {
      if (dummy.value == val) return true;
      dummy = dummy.next;
    }
    return false;
  }
  top() {
    return this.head;
  }

  empty() {
    return this.head == null;
  }

  insert(val: any) {
    if (this.empty()) this.head = new ListNode(val);
    else this.insertEnd(val);
  }

  insertBetween(prevNode: ListNode, val: any) {
    var newNode: ListNode = new ListNode(val);
    prevNode.next = newNode;
    newNode.next = prevNode.next;
  }

  insertStart(val: any): void {
    var newNode: ListNode = new ListNode(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertEnd(val: any) {
    var newNode = new ListNode(val);
    var dummy = this.head;
    while (dummy.next) {
      dummy = dummy.next;
    }
    dummy.next = newNode;
  }

  print() {
    var dummy = this.head;
    var result: string = "";
    while (dummy) {
      if (dummy.next == null) result += dummy.value + " --> Null";
      else result += dummy.value + " --> ";
      dummy = dummy.next;
    }
    console.log(result);
  }

  remove(val: any) {
    var curr = this.head;
    var prev = this.head;
    if (!this.empty()) {
      while (curr) {
        if (curr.value === val) {
          if (curr == this.head) this.deleteFirst();
          else if (curr.next == null) this.deleteLast(prev);
          else this.deleteBetween(prev, curr);
        }
        prev = curr;
        curr = curr.next;
      }
    }
  }

  deleteLast(prevNode: ListNode) {
    prevNode.next = null;
  }

  deleteBetween(prevNode: ListNode, node: ListNode) {
    prevNode.next = node.next;
  }

  deleteFirst() {
    var dummy = this.head;
    this.head = dummy.next;
  }
}

var list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.print();

//remove 3 and at 0 at start
list.remove(3);
list.insertStart(0);
list.print();

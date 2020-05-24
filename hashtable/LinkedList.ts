//
export class LinkedList {
  private head: any = null;

  empty(): boolean {
    if (this.head) return false;
    return true;
  }

  last(): ListNode {
    var dummy: ListNode = this.head;
    while (dummy.getNext()) {
      dummy = dummy.getNext();
    }
    return dummy;
  }
  find(key: string): any {
    var dummy: ListNode = this.head;
    while (dummy) {
      if (dummy.getKey() == key) return dummy.value();
      dummy = dummy.getNext();
    }
    return false;
  }
  insert(value: any, key: string): void {
    var node: ListNode = new ListNode(value, key);
    if (!this.head) this.head = node;
    else this.last().next(node);
  }

  print(): void {
    var dummy: ListNode = this.head;
    while (dummy) {
      console.log(dummy.value() + " ");
      dummy = dummy.getNext();
    }
  }
}

//node
class ListNode {
  private val: any;
  private key: string;
  private nextNode: any;

  constructor(value: any, key: string) {
    this.nextNode = null;
    this.key = key;
    this.val = value;
  }
  getNext(): ListNode {
    return this.nextNode;
  }
  next(node: ListNode) {
    this.nextNode = node;
  }
  getKey(): string {
    return this.key;
  }

  value(): any {
    return this.val;
  }
}

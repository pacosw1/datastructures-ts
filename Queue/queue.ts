class QNode {
  private next;
  private val;

  constructor(val) {
    this.next = null;
    this.val = val;
  }
}

class Queue {
  public head;
  public tail;
  private len;

  constructor() {
    this.head = null;
    this.len = 0;
  }

  empty() {
    return this.head == null;
  }

  queue(val) {
    if (this.empty()) {
      this.head = new QNode(val);
      this.tail = this.head;
    } else {
      this.tail.next = new QNode(val);
      this.tail = this.tail.next;
    }
    this.len++;
  }
  dequeue() {
    if (!this.empty()) {
      this.head = this.head.next;
      this.len--;
    }
  }

  size() {
    return this.len;
  }

  print() {
    var curr = this.head;
    var result = "front -> ";
    while (curr) {
      result += `${curr.val} --> `;
      curr = curr.next;
    }
    result += "Null";
    console.log(result);
  }

  peek() {
    if (this.empty()) return -1;
    else return this.head.val;
  }
}

var q = new Queue();
q.queue(1);
q.queue(2);
q.queue(3);
q.queue(4);
q.queue(5);
console.log("size: " + q.size());
q.print();

q.dequeue();
console.log("size: " + q.size());
q.print();

q.dequeue();
console.log("size: " + q.size());
q.print();

q.dequeue();
console.log("size: " + q.size());
q.print();

q.dequeue();
console.log("size: " + q.size());
q.print();

q.dequeue();
console.log("size: " + q.size());
q.print();

class StackNode {
  public val;
  public next;

  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Stack {
  private head;
  private length;

  constructor() {
    this.head = null;
    this.length = 0;
  }
  //returns true if stack is empty
  empty() {
    return this.head == null;
  }
  //returns the size of the stack
  size() {
    return this.length;
  }
  //add a value to the top of the stack
  push(val) {
    if (this.empty()) this.head = new StackNode(val);
    else {
      var newNode = new StackNode(val);
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
  }
  //removes the top value in the stack
  pop() {
    if (!this.empty()) {
      var val = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
    }
  }
  //returns the top value in the stack
  peek() {
    if (this.empty) return -1;
    return this.head.val;
  }
  //prints the stack's contents
  print() {
    var curr = this.head;
    var result = "";
    while (curr) {
      if (curr.next) result += `${curr.val} --> `;
      else result += `${curr.val} --> Null`;
      curr = curr.next;
    }
    console.log(result);
  }
}

var stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();
stack.push(10);

stack.print();

console.log("size: " + stack.size());

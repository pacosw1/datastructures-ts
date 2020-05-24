/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.hash = {};
  this.list = new DLinkedList();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (key in this.hash) {
    //if ket exists
    this.list.moveToFront(this.hash[key]); //move it to the front
    return this.hash[key].val; //return its value
  } else {
    return -1; //return not found -1
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (key in this.hash) {
    //if our key already exists, update its value and push it to the front
    this.hash[key].val = value; //update value
    this.list.moveToFront(this.hash[key]); //move to front of linkedList
  } else {
    let len = Object.keys(this.hash).length;

    if (len < this.capacity) {
      //if we still have capacity, add the new item and add it to the front
      this.list.addFront(key, value);
      this.hash[key] = this.list.head;
    } else {
      //if we have reached max capacity, we delete LRU and add new item to front
      delete this.hash[this.list.tail.key]; //remove LRU item from linked list
      this.list.removeLast(); //remove from hash table

      //add new item to cache
      this.list.addFront(key, value);
      this.hash[key] = this.list.head;
    }
  }
};

var DNode = function (key, value) {
  this.key = key;
  this.val = value;
  this.prev = null;
  this.next = null;
};

var DLinkedList = function (capacity) {
  this.head = null;
  this.tail = null;
};

DLinkedList.prototype.addFront = function (key, val) {
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
};

DLinkedList.prototype.moveToFront = function (node) {
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
};

DLinkedList.prototype.removeLast = function () {
  if (this.head != this.tail) {
    let prev = this.tail.prev;
    prev.next = null;
    //update tail
    this.tail = prev;
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

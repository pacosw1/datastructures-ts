// import { DLinkedList } from "./DLinkedList";
class LRU {
  private capacity;
  private hash: {};
  private list: DLinkedList;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.hash = {};
    this.list = new DLinkedList();
  }

  put = (key: number, value: number): void => {
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

  get = (key: number): number => {
    if (key in this.hash) {
      //if ket exists
      this.list.moveToFront(this.hash[key]); //move it to the front
      return this.hash[key].val; //return its value
    } else {
      return -1; //return not found -1
    }
  };
}

// let cache = new LRU(4);

// cache.put(1, 10);
// cache.put(2, 20);
// cache.put(3, 30);
// cache.put(4, 40);
// cache.get(1);
// cache.put(5, 50);
// cache.get(1);

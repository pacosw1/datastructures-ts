import { LinkedList } from "./LinkedList";

export class HashTable {
  size: number;
  private table: LinkedList[];

  constructor(size: number) {
    this.size = size;
    this.table = [];
    for (let i = 0; i < size; i++) {
      this.table[i] = new LinkedList();
    }
  }

  hash = (key: string): string => {
    var id: number = 0;
    for (let i = 0; i < key.length; i++) {
      id += key.charCodeAt(i) * 100 - key.charCodeAt(i - 1 < 0 ? 0 : i - 1);
    }
    return (id % this.size) + "";
  };

  insert(key: string, value: any) {
    var id: string = this.hash(key);
    var bucket: LinkedList = this.table[id];

    bucket.insert(value, key);
  }
  get(key: string) {
    var id = this.hash(key);
    var bucket: LinkedList = this.table[id];

    if (!bucket.empty()) {
      var value: any = bucket.find(key);
      if (value) return value;
    }
    return "key does not exist";
  }

  print(): void {
    console.log(this.table);
  }
}

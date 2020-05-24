class BinaryNode {
  public val: any;
  public left: BinaryNode;
  public right: BinaryNode;

  constructor(val: any) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  isLeaf() {
    if (this.left == null && this.right == null) return true;
    return false;
  }
  hasOnlyLeftChild() {
    if (this.left !== null && this.right == null) return true;
    return false;
  }
  hasOnlyRightChild() {
    if (this.right !== null && this.left == null) return true;
    return false;
  }
  hasChildren() {
    if (this.left !== null && this.right !== null) return true;
    return false;
  }
}

class BinaryTreeR {
  public root: BinaryNode = null;

  constructor() {
    this.root = null;
  }

  exists(val: any): boolean {
    var dummy = this.root;
    var result: boolean = this.findNode(dummy, val);
    return result;
  }

  private findNode(node: BinaryNode, val: any) {
    //if our current node is null, return null;
    if (!node) return node;
    else {
      //if val < current node's value move left
      if (val < node.val) return this.findNode(node.left, val);
      // val > current node's value move right
      else if (val > node.right) return this.findNode(node.right, val);
      //else, it means we found our node (val == current node's val)
      else return node;
    }
  }

  add(val: any): void {
    var dummy = this.root;
    this.insert(dummy, val);
  }

  private insert(node: BinaryNode, val: any): BinaryNode {
    //if our tree is empty, assign new node to root
    if (!node) this.root = new BinaryNode(val);
    else {
      //if val < curr Node, we go left
      if (val <= node.val) {
        //if we reached the leaf node, we insert
        if (!node.left) {
          node.left = new BinaryNode(val);
        }
        //keep looking;
        else return this.insert(node.left, val);
        //else we go right;
      } else {
        //if we found the leaf, insert
        if (!node.right) {
          node.right = new BinaryNode(val);
        }
        //else keep looking recursively
        else return this.insert(node.right, val);
      }
    }
  }

  private goLeft(node: BinaryNode): BinaryNode {
    if (!node.left) return node;
    else return this.goLeft(node.left);
  }

  remove(val: any): void {
    this.deleteNode(this.root, this.root, val);
  }

  private deleteNode(
    parent: BinaryNode,
    node: BinaryNode,
    val: any
  ): BinaryNode {
    if (node == null) return;
    //look for specified value on tree
    if (val < node.val) return this.deleteNode(node, node.left, val);
    //go right if value is greater than curr node
    else if (val > node.val) return this.deleteNode(node, node.right, val);
    //if we found the value, we have three possible scenarios
    else {
      //if the node we want to delete is a leaf
      if (node.isLeaf()) {
        if (node == this.root) this.root = null;
        else if (val < parent.val) parent.left = null;
        else parent.right = null;
        //if the node we want to delere has a child to the left
      } else if (node.hasOnlyLeftChild()) {
        if (node == this.root) this.root == node.left;
        //we decide which side to add it to based on the value
        //left if val < than current node
        else if (val < parent.val) parent.left = node.left;
        //right if val is greater
        else parent.right = node.left;

        //if the node has only a right child
      } else if (node.hasOnlyRightChild()) {
        //if we delete the root, we make the node to the right the root;
        if (node == this.root) this.root = node.right;
        //left is less
        else if (val < parent.val) parent.left = node.right;
        //right if greater
        else parent.right = node.right;

        //or if it has both children
      } else if (node.hasChildren()) {
        //if it has both children, we need to find the smallest value to the right of the tree
        var leftMost: BinaryNode = this.goLeft(node.right);
        console.log(node.val);

        //we now add the left children of deleted node, to the left side of the right node
        leftMost.left = node.left;

        //now we replace the deleted node, with the node to the right
        if (val < parent.val) parent.left = node.right;
        else parent.right = node.right;

        //if its the root, we update the root
        if (this.root == node) this.root = node.right;
      }
    }
  }
}

var tree: BinaryTreeR = new BinaryTreeR();

tree.add(1);
tree.add(3);
tree.add(10);
tree.add(4);
tree.add(12);
tree.add(7);
tree.add(0);

tree.remove(10);

console.log(tree.root.right);

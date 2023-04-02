// двусвязный список
type Nullable<T> = T | null


class LinkedListNode<T> {
  value;
  next: Nullable<LinkedListNode<T>>
  constructor(value: T, next: Nullable<LinkedListNode<T>> = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList<T> {
  head: Nullable<LinkedListNode<T>> = null;
  tail: Nullable<LinkedListNode<T>> = null;
  _length: number = 0;
  constructor() {}

  append(value: T): LinkedList<T> {
    const newNode = new LinkedListNode(value);
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;

      this._length++;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    
    this._length++;
    return this;
  }

  prepend(value: T): LinkedList<T> {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }

    this._length++;
    return this;
  }

  find(value: T): [LinkedListNode<T>, number] | null {
    if (!this.head) {
      return null
    }

    let index: number = -1
    let current: Nullable<LinkedListNode<T>> = this.head

    while (current) {
      if (value && current.value === value) {
        return [current, index + 1]
      }

      index++
      current = current.next
    }

    return null
  }

  delete(value: T): Nullable<LinkedList<T>> {
    if (!this.head) return null;
    let deleteNode = null;
    while (this.head && this.head.value === value) {
      deleteNode = this.head;
      this.head = this.head.next;
    }

    let currNode = this.head;

    if (currNode) {
      while (currNode.next) {
        if (currNode.next.value === value) {
          deleteNode = currNode.next;
          currNode.next = currNode.next.next;
        } else {
          currNode = currNode.next;
        }
      }
    }
    if (this.tail?.value === value) {
      this.tail = currNode;
    }

    return this;
  }

  get length(): number {
    return this._length;
  }
}

const list = new LinkedList();
console.log(list.append("a").append("b").append("c"));

// бинарное дерево

class BinaryTreeNode {
  value: number;
  left: Nullable<BinaryTreeNode>
  parent:  Nullable<BinaryTreeNode>
  right:  Nullable<BinaryTreeNode>
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.parent = null;
    this.right = null;
  }

  setLeft(node: BinaryTreeNode) {
    if (this.left) {
      this.left.parent = null;
    }
    if (node) {
      this.left = node;
      this.left.parent = this;
    }
  }

  setRight(node: BinaryTreeNode) {
    if (this.right) {
      this.right.parent = null;
    }
    if (node) {
      this.right = node;
      this.right.parent = this;
    }
  }
}

class BinaryTree {
  root: Nullable<BinaryTreeNode>;
  constructor() {
    this.root = null;
  }

  insert(data: number) {
    const node = new BinaryTreeNode(data);

        if (!this.root) {
            this.root = node;
            return;
        }

        let current = this.root;

        while (current) {
            if (data < current.value) {
                if (!current.left) {
                    current.left = node;
                    break;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = node;
                    break;
                }
                current = current.right;
            }
        }
    }

    find(data: number) {
      let current = this.root;

      while (current) {
          if (data === current.value) {
              return current;
          }

          if (data < current.value) {
              current = current.left;
          } else {
              current = current.right;
          }
      }

      return null;
  }
}

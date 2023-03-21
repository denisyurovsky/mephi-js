// двусвязный список

class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new LinkedListNode(value);
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  find(value) {
    if (!this.head) return null;

    let currNode = this.head;
    while (currNode) {
      if (currNode.value === value) return currNode;
      currNode = currNode.next;
    }
    return null;
  }

  delete(value) {
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

    return deleteNode;
  }
}

const list = new LinkedList();
console.log(list.append("a").append("b").append("c"));

// бинарное дерево

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.parent = null;
    this.right = null;
  }

  setLeft(node) {
    if (this.left) {
      this.left.parent = null;
    }
    if (node) {
      this.left = node;
      this.left.parent = this;
    }
  }

  setRight(node) {
    if (this.right) {
      this.right.parent = null;
    }
    if (node) {
      this.right = node;
      this.right.parent = this;
    }
  }
}
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
}

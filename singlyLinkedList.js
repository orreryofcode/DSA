// Singly Linked List

// Create Node object
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Create actual list
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // insertion method
  push(val) {
    var newNode = new Node(val);

    if (!this.head) {
      //If there are no items in the list...
      this.head = newNode; // Set the head and tail to equal the created node
      this.tail = this.head;
    } else {
      this.tail.next = newNode; // Else, set the next property to point to newNode...
      this.tail = newNode; // And set the tail property to be the newNode
    }

    this.length++;
    return this;
  }

  //   Delete from end of list
  pop() {
    if (this.length === 0) {
      return;
    }

    var start = this.head;
    var prev = start;
    while (start.next) {
      prev = start;
      start = start.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;
    return start;
  }
}

var list = new SinglyLinkedList();

list.push("Hello");
list.push("Goodbye");

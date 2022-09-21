// Singly Linked List

//////////////////////////Create Node object//////////////////////////
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//////////////////////////Create actual list//////////////////////////
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //////////////////////////Insert at end of list//////////////////////////
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

  //////////////////////////Delete from end of list//////////////////////////
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

  //////////////////////////Remove node from start of list//////////////////////////
  shift() {
    if (this.length === 0) {
      return undefined;
    }

    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return currentHead;
  }

  //////////////////////////Insert at the start of list//////////////////////////
  unshift(val) {
    var newNode = new Node(val);

    if (!this.head) {
      //If the list is empty...
      this.head = newNode; //Set the head to the newly created node
      this.tail = this.head; // Set the tail to the newly created node
    } else {
      newNode.next = this.head; //Otherwise, have the new node point to the head
      this.head = newNode; // Reassign the new node as the new head
    }

    this.length++; // increment length
    return this;
  }

  //////////////////////////Get node at requested index//////////////////////////
  get(index) {
    if (index < 0 || index >= this.length) {
      //if requested index is out of bounds, return null
      return null;
    }
    var counter = 0; // Create a counter variable
    var current = this.head; // Set starting point to the head

    while (counter !== index) {
      //Loop through the nodes until the counter === index and then return the current value that is reassigned
      current = current.next;
      counter++;
    }
    return current;
  }

  //////////////////////////Update node at requested index//////////////////////////
  set(index, newVal) {
    var foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = newVal;
      return true;
    }
    return false;
  }

  //////////////////////////Insert node at requested index//////////////////////////
  insert(index, newVal) {
    if (index < 0 || index > this.length) return false;
    //if requested index is out of bounds, return null

    // If insertion at index 0
    if (index === 0) return !!this.unshift(newVal);
    // If insertion is at end of list
    if (index === this.length) return !!this.push(newVal);

    // Create new node
    var newNode = new Node(newVal);
    // Get the node to the left of where we are inserting
    var prevNode = this.get(index - 1);
    // Get the node to the right of where we are inserting
    var postNode = this.get(index);

    // Set the left node's pointer to the inserted node
    prevNode.next = newNode;
    // Set the inserted node's pointer to the right node
    newNode.next = postNode;
    this.length++;
    return true;
  }

  //////////////////////////Remove node at requested index//////////////////////////
  remove(index) {
    //if requested index is out of bounds, return null
    if (index < 0 || index > this.length) return false;

    // If removing the first node in the list
    if (index === 0) return !!this.shift();

    // If removing last node in the list
    if (index === this.length - 1) return !!this.pop();

    // If removing node in middle of list
    var prevNode = this.get(index - 1);
    var postNode = this.get(index + 1);
    var removed = this.get(index);

    prevNode.next = postNode;
    this.length--;
    return removed;
  }

  reverse() {
    var temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    var prev = null;
    var next = null;
    for (var i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("!");

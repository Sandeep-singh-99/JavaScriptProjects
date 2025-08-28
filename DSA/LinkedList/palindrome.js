class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class PalindromeLinkedList {
  constructor() {
    this.head = null;
  }

  addNode(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  printNodes() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  isPalindrome() {
    if (!this.head || !this.head.next) return true;

    // Find middle and reverse first half
    let slow = this.head;
    let fast = this.head;
    let prev = null;

    while (fast && fast.next) {
      fast = fast.next.next;
      let next = slow.next;
      slow.next = prev;
      prev = slow;
      slow = next;
    }

    // For odd length, skip the middle node
    let second = fast ? slow.next : slow;
    let first = prev;

    // Compare both halves
    while (first && second) {
      if (first.data !== second.data) return false;
      first = first.next;
      second = second.next;
    }
    return true;
  }
}

const list = new PalindromeLinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(2);
list.addNode(1);

list.printNodes();
console.log("Is palindrome:", list.isPalindrome());

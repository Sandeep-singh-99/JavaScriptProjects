// stack push, pop, peek, isEmpty, size, print

class Stack {
  constructor() {
    this.items = [];
  }

  // push element into stack
  push(value) {
    this.items.push(value);
  }

  // remove top element
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // view top element
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // check if stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // get stack size
  size() {
    return this.items.length;
  }

  // print stack elements
  print() {
    console.log(this.items.join(" "));
  }
}


const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.print();     // 10 20 30
console.log(stack.peek());   // 30
console.log(stack.pop());    // 30
console.log(stack.size());   // 2
console.log(stack.isEmpty()); // false

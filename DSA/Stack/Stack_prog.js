// Stack

// push
// pop
// peek
// isEmpty
// size of stack


class Stack {
  constructor(maxSize) {
    this.MAX = maxSize;
    this.stack = [];
    this.top = -1;
  }

  // push
  push(x) {
    if (this.top == this.MAX - 1) {
      console.log("Stack overflow");
    } else {
      this.top++;
      this.stack[this.top] = x;
    }
  }

  // pop
  pop() {
    if (this.top == -1) {
      console.log("Stack underflow");
      return null; // Return null or undefined when the stack is empty
    } else {
      const item = this.stack[this.top];
      this.top--;
      console.log("The popped item is " + item);
      return item; // Return the popped item for potential further use
    }
  }

  // peek (optional, returns the top item without removing it)
  peek() {
    if (this.top == -1) {
      console.log("Stack is empty");
      return null;
    } else {
      return this.stack[this.top];
    }
  }

  // display
  display() {
    if (this.top == -1) {
      console.log("Stack is empty");
    } else {
      for (let i = this.top; i >= 0; i--) {
        console.log(this.stack[i]);
      }
    }
  }
}

// Example usage
const obj = new Stack(5); // Initialize stack with a maximum size of 5
obj.push(10);
obj.push(20);
obj.push(30);
obj.push(40);
obj.push(50);
obj.display(); // Displays: 50 40 30 20 10
obj.pop(); // Displays: The popped item is 50
obj.display(); // Displays: 40 30 20 10

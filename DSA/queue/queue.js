class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(value) {
        this.items.push(value);
    }

    dequeue() {
        this.items.shift();
    }

    front() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.join(" "));
    }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print();          // 10 20 30
console.log(queue.front());    // 10
queue.dequeue();
console.log(queue.front());
console.log(queue.size());     // 2    // 20
console.log(queue.isEmpty());  // false
queue.print();          // 20 30

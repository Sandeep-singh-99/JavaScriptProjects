class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class MinMaxList {
    constructor() {
        this.head = null;
    }

    add(data) {
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

    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    MinNodes() {
        if (!this.head) return null;

        let min = this.head.data;
        let current = this.head;
        while (current) {
            if (current.data < min) {
                min = current.data;
            }
            current = current.next;
        }
        return min;
    }

    MaxNodes() {
        if (!this.head) return null;

        let max = this.head.data;
        let current = this.head;
        while (current) {
            if (current.data > max) {
                max = current.data;
            }
            current = current.next;
        }
        return max;
    }
}


const myList = new MinMaxList();

myList.add(10);

myList.add(20);

myList.add(30);

myList.add(40);

myList.add(50);

myList.add(5);


myList.printList();


console.log("Min:", myList.MinNodes());

console.log("Max:", myList.MaxNodes());

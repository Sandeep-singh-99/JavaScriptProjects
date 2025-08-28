class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class RemoveDuplicate {
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

    removeDuplicates() {
        let current = this.head;
        while (current && current.next) {
            if (current.data === current.next.data) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
    }

    printNodes() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}


const myList = new RemoveDuplicate();

myList.add(10);
myList.add(20);
myList.add(20);
myList.add(30);
myList.add(30);
myList.add(40);
myList.add(50);
myList.add(50);

console.log("Before removing duplicates:");
myList.printNodes();

myList.removeDuplicates();

console.log("After removing duplicates:");
myList.printNodes();

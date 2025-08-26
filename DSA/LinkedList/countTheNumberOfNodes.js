// program to create a singly linked list of n nodes and count the number of nodes

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class countNodes {
    constructor() {
        this.head = null;
        this.count = 0;
    }

    addNode(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next) {
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

    getCountNodes() {
        let current = this.head;
        while (current) {
            this.count++;
            current = current.next;
        }
        return this.count;
    }
}

const myList = new countNodes();
myList.addNode(5);
myList.addNode(10);
// myList.addNode(15);
myList.printNodes();
console.log("Total nodes:", myList.getCountNodes());
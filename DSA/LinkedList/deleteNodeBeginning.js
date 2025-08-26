class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class DeleteNodeBeginning {
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

    deleteNodeAtBeginning() {
        if (this.head) {
            this.head = this.head.next;
        }
    }
}


const myList = new DeleteNodeBeginning();

myList.addNode(1);
myList.addNode(2);
myList.addNode(3);
myList.addNode(4);
myList.addNode(5);

console.log("Original List:");
myList.printNodes();

myList.deleteNodeAtBeginning();

console.log("List After Deleting First Node:");
myList.printNodes();

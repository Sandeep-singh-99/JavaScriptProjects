class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class DeleteMiddleNode {
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

    deleteMiddleNode() {
        if (!this.head || !this.head.next) {
            this.head = null;
            return;
        }

        let slow = this.head;
        let fast = this.head
        let prev = null;

        while (fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }

        if (prev) {
            prev.next = slow.next;
        }
    }
}


const  myList = new DeleteMiddleNode();

myList.addNode(1);
myList.addNode(2);
myList.addNode(3);
myList.addNode(4);
myList.addNode(5);

console.log("Original List:");
myList.printNodes();

myList.deleteMiddleNode();

console.log("List After Deleting Middle Node:");
myList.printNodes();
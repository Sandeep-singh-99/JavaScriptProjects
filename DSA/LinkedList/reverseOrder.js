class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class ReverseLinkedListNode {
    constructor() {
        this.head = null;
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

    reverseNode() {
        if (this.head === null) {
            return null;
        }

        let prev = null;
        let current = this.head;
        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
}


const myList = new ReverseLinkedListNode();

myList.addNode(1);
myList.addNode(2);
myList.addNode(3);
myList.addNode(4);
myList.addNode(5);

console.log("Original List:");
myList.printNodes();

myList.reverseNode();

console.log("Reversed List:");
myList.printNodes();

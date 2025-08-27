class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class DeleteLastNode {
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

    deleteLastNode() {
        if (!this.head) return;

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let current = this.head;
        while (current.next && current.next.next) {
            current = current.next;
        }
        current.next = null;
    }
}


const MyList = new DeleteLastNode();

MyList.addNode(1);
MyList.addNode(2);
MyList.addNode(3);
MyList.addNode(4);
MyList.addNode(5);

console.log("Original List:");
MyList.printNodes();

MyList.deleteLastNode();

console.log("List After Deleting Last Node:");
MyList.printNodes();

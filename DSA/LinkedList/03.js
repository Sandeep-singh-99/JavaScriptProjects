class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListAddNode{
    constructor() {
        this.head = null;
    }

    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = newNode
        }
    }

    printList() {
        let current = this.head;
        while(current) {
            console.log("Print all added linked list \n",current.data);
            current = current.next;
        }
    }
}

const myList = new LinkedListAddNode();

myList.add(10);
myList.add(20);
myList.add(30);

myList.printList()
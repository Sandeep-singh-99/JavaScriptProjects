class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class ReverseLinkedList {
    constructor() {
        this.head = null;
    }

    addData(data) {
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

    reverseList() {
        let prev = null;
        let current = this.head;
        while(current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    printList() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}


const list = new ReverseLinkedList();
list.addData(1);
list.addData(2);
list.addData(3);
list.addData(4);
list.addData(5);

console.log("Original List:");
list.printList();

list.reverseList();

console.log("Reversed List:");
list.printList();
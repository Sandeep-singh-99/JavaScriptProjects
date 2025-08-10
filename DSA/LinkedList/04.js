class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CountLinkedList {
    constructor() {
        this.head = null;
        this.count = 1;
    }

    addData(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
            this.count++;
        }
    }

    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    getCount() {
        return this.count;
    }
}


const myList = new CountLinkedList();
myList.addData(5);
myList.addData(10);
myList.addData(15);
myList.printList(); // Output: 5 10 15
console.log("Count of nodes present in the list:",myList.getCount()); // Output: 3
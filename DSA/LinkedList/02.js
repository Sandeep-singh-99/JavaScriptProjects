class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class addList {
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
}


const myList = new addList();

myList.add(10);

myList.add(20);

myList.add(30);


myList.printList();

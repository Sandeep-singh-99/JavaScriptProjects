class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SearchElement {
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

    printNodes() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }


    search(value) {
        let current = this.head;
        while (current) {
            if (current.data === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }
}


const myList = new SearchElement();

myList.add(10);
myList.add(20);
myList.add(30);
myList.add(40);
myList.add(50);

myList.printNodes();

const searchResult = myList.search(300);
if (searchResult) {
    console.log("Found:", searchResult.data);
} else {
    console.log("Not Found");
}
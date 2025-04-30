class Node {
    constructor(value) {
        this.value = value
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    append(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
        this.size++
    }

    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.size++
    }

    print() {
        let current = this.head
        const values = []
        while(current) {
            values.push(current.value)
            current = current.next
        }
        console.log(values.join(' -> '));
    }
}

const list = new LinkedList()

list.append(1)
list.append(2)
list.append(3)
// list.prepend(0)
list.print() // Output: 0 -> 1 -> 2 -> 3

console.log("Size of the list:", list.size); 

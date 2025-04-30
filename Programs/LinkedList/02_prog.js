class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(data) {
        const newNode = new Node(data)
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

    prepend(data) {
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
        this.size++
    }

    remove(data) {
        if (!this.head) return false

        if (this.head.data === data) {
            this.head = this.head.next
            this.size--
            return true
        }

        let current = this.head
        while (current.next && current.next.data !== data) {
            current = current.next
        }

        if (current.next) {
            current.next = current.next.next
            this.size--
            return true
        }
        return false
    }

    print() {
        let current = this.head
        const values = []
        while (current) {
            values.push(current.data)
            current = current.next
        }
        console.log(values.join(' -> '));
    }
}

const list = new LinkedList()

list.append(1)
list.append(2)
list.append(3)

list.prepend(0)
list.print() // Output: 0 -> 1 -> 2 -> 3

console.log("Size of the list:", list.size); // Output: 4

console.log("Removing 2:", list.remove(3)); // Output: true

list.print() // Output: 0 -> 1 -> 3


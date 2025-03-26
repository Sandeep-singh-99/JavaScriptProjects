// Remove Duplicate from sorted Linked list

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function removeDuplicate(head) {
    if (!head) return null;
    
    let current = head;
    
    while(current != null && current.next !== null) {
        if (current.value === current.next.value) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    
    return head;
}

function traverseList(node) {
    let current = node;
    const values = [];
    
    while(current !== null) {
        values.push(current.value);
        current = current.next;
    }
    
    console.log("List values:", values.join(" -> "));
    return values;
}


const node1 = new ListNode(4);
const node2 = new ListNode(3, node1);
const node3 = new ListNode(3, node2); 
const node4 = new ListNode(2, node3);
const node5 = new ListNode(1, node4);

console.log("Original list:");
traverseList(node5);

console.log("\nAfter removing duplicates:");
const newHead = removeDuplicate(node5);

traverseList(newHead);
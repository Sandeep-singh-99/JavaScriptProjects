class Node {
    constructor(x) {
        this.data = x;
        this.children = [];
    }
}

function addChild(parent, child) {
    parent.children.push(child);
}

function printParents(node, parent) {
    if (parent === null) 
        console.log(node.data + " -> root");
    else 
        console.log(node.data + " -> "+ parent.data);
    
    for (let child of node.children) 
        printParents(child, node);
        
}

function printLeafNodes(node) {
    if (node.children.length === 0) {
        process.stdout.write(node.data + " ");
        return;
    }

    for (let child of node.children)
        printLeafNodes(child);
}


function printDegrees(node, parent) {
    let degree = node.children.length;
    if (parent !== null)
        degree++;
    console.log(node.data + " -> " + degree);

    for (let child of node.children)
        printDegrees(child, node);
}

let root = new Node(1);
let child1 = new Node(2);
let child2 = new Node(3);
let child3 = new Node(4);
let child4 = new Node(5);
let child5 = new Node(6);


addChild(root, child1);
addChild(root, child2);
addChild(child1, child3);
addChild(child1, child4);
addChild(child2, child5);


console.log("Parents of each node:");
printParents(root, null);

console.log("Children of each node:");
printLeafNodes(root);

process.stdout.write("Leaf nodes: ");
printLeafNodes(root);
console.log();

console.log("Degrees of nodes:");
printDegrees(root, null);
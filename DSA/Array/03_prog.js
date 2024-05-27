// Program to print the elements of an array in reverse order

let arr = [1, 2, 3, 4, 5];

console.log("Element of original array");
for (const i of arr) {
    console.log(i);
}

console.log();

console.log("Element of reverse order");
for(let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}
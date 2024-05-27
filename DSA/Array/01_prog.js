/* Program to sort the elements of an array in ascending order */

let arr = [5, 2, 8, 7, 1]
let temp = 0

console.log("Element of original array: ");

for (const i of arr) {
    console.log(i);
}


for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}

console.log();

console.log("Element after sorting ascending order: ");
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// Program to print the largest element in the array

let arr = [24, 11, 7, 75, 56, 1000, 756]
let max = arr[0]

for(let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
}

console.log("Largest elements in an array:", max);
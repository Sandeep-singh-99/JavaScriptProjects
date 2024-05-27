// Program to print the duplicate elements of an array

let arr = [1, 2, 3, 4, 2, 7, 8, 8, 3]

console.log("Duplicate element of an array: ");

for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            console.log(arr[j]);
        }
    }
}
// Program to print the elements if an array in reverse order

function printArrayReverse(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

arr = [3, 8, 7, 6, 5, -4, 3, 2, 1];

printArrayReverse(arr); // [1, 2, 3, -4, 5, 6, 7, 8, 3]


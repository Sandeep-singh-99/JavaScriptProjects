// Program to sort the elements of an array in ascending order


function ascendingOrder(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
}

arr = [3, 8, 7, 6, 5, -4, 3, 2, 1];

console.log("Original array is:", arr); // [3, 8, 7, 6, 5, -4, 3, 2, 1]
ascendingOrder(arr);

console.log("Ascending order is:", arr); // [-4, 1, 2, 3, 3, 5, 6, 7, 8]

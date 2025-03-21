// Program to print the duplicate elements of an array

function duplicateElement(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                console.log("Duplicate element is:", arr[j]); 
            }
        }
    }
}

arr = [1, 2, 3, 4, 2, 7, 8, 8, 3]

duplicateElement(arr);
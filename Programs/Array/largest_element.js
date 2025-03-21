// Program to print the largest element in an array

function largestElement(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) { 
        if (arr[i] > max) {
            max = arr[i]; 
        }
    }

    console.log("Largest element is:", max);
}

const arr = [25, 11, 7, 75, 56]; 

largestElement(arr);
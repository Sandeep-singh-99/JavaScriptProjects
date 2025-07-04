function sort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) 
            if (arr[j] < arr[minIndex])
                minIndex = j;

        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
}


function printArray(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        console.log(arr[i]);
    }
}

const arr = [64, 25, 12, 22, 11]
console.log("Unsorted array:");
printArray(arr);
sort(arr);
console.log("Sorted array:");
printArray(arr);
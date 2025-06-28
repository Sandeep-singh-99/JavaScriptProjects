
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}


function printArray(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        console.log(arr[i]);
    }
}

const arr = [12, 11, 13, 5, 6];
console.log("Unsorted array:");
printArray(arr);
insertionSort(arr);
console.log("Sorted array:");
printArray(arr);
function LinearSearch(arr, target) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

array = [4, 2, 3, 5, 1];
target = 5;

result = LinearSearch(array, target);
console.log("Element found at index:", result);
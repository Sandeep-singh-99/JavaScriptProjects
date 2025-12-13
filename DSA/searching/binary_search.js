function BinarySearch(arr, target) {
    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
}

arr = [1, 2, 3, 4, 5];
target = 5;

result = BinarySearch(arr, target);
console.log("Element found at index:", result);
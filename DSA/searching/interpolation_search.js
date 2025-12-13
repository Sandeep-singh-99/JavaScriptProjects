function InterpolationSearch(arr, target) {
    let l = 0;
    let hi = arr.length - 1;
    let pos = -1;

    while(l <= hi) {
        pos = l + Math.floor(((hi - l) / (arr[hi] - arr[l])) * (target - arr[l]));

        if (arr[pos] === target) {
            return pos;
        } else if (arr[pos] < target) {
            l = pos + 1;
        } else {
            hi = pos - 1;
        }
    }
}

arr = [1, 4, 10, 15, 23, 30, 42, 56, 70];
target = 30;

result = InterpolationSearch(arr, target);
console.log("Element found at index:", result);
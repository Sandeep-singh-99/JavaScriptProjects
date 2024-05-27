// Helper function to perform insertion sort on a bucket
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// Main function to implement bucket sort
function bucketSort(arr, bucketSize) {
    if (arr.length === 0) {
        return arr;
    }

    // Determine minimum and maximum values in the array
    let minValue = Math.min(...arr);
    let maxValue = Math.max(...arr);

    // Initialize buckets
    bucketSize = bucketSize || 5; // Default bucket size if not provided
    let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    let buckets = new Array(bucketCount);
    
    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }

    // Distribute elements into buckets
    for (let i = 0; i < arr.length; i++) {
        let bucketIndex = Math.floor((arr[i] - minValue) / bucketSize);
        buckets[bucketIndex].push(arr[i]);
    }

    // Sort individual buckets and concatenate the result
    let sortedArray = [];
    for (let i = 0; i < buckets.length; i++) {
        if (buckets[i].length > 0) {
            insertionSort(buckets[i]);
            sortedArray = sortedArray.concat(buckets[i]);
        }
    }

    return sortedArray;
}

// Example usage
let arr = [42, 32, 33, 52, 37, 47, 51];
console.log("Original array:", arr);
let sortedArray = bucketSort(arr);
console.log("Sorted array:", sortedArray);

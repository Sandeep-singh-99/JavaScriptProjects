function countingSort(arr) {
    if (arr.length === 0) return arr;

    // Find the maximum value in the array
    let max = Math.max(...arr);
    
    // Initialize count array with all zeros
    let count = new Array(max + 1).fill(0);

    // Store the count of each element
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }

    // Modify count array so that each element at each index 
    // stores the sum of previous counts
    for (let i = 1; i <= max; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    let output = new Array(arr.length);
    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }

    // Copy the output array to arr, so that arr now contains sorted elements
    for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
    }

    return arr;
}

// Example usage
let arr = [4, 2, 2, 8, 3, 3, 1];
console.log("Original array:", arr);
let sortedArray = countingSort(arr);
console.log("Sorted array:", sortedArray);

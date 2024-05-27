// Helper function to perform counting sort on a specific digit
function countingSortForRadix(arr, exp) {
    let n = arr.length;
    let output = new Array(n).fill(0);
    let count = new Array(10).fill(0);

    // Store the count of occurrences of each digit
    for (let i = 0; i < n; i++) {
        let index = Math.floor(arr[i] / exp) % 10;
        count[index]++;
    }

    // Change count[i] so that it contains the actual position of this digit in output array
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    for (let i = n - 1; i >= 0; i--) {
        let index = Math.floor(arr[i] / exp) % 10;
        output[count[index] - 1] = arr[i];
        count[index]--;
    }

    // Copy the output array to arr, so that arr now contains sorted numbers
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

// Main function to implement radix sort
function radixSort(arr) {
    // Find the maximum number to know the number of digits
    let max = Math.max(...arr);

    // Perform counting sort for every digit
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countingSortForRadix(arr, exp);
    }
    return arr;
}

// Example usage
let arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log("Original array:", arr);
let sortedArray = radixSort(arr);
console.log("Sorted array:", sortedArray);

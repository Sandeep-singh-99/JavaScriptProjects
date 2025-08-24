function bobArrayHardness(arr) {
  const n = arr.length;

  // Case when n <= 1
  if (n <= 1) {
    return 0;
  }

  // Case when n > 1
  let maxDiff = 0;
  for (let i = 0; i < n - 1; i++) {
    const diff = Math.abs(arr[i + 1] - arr[i]);
    maxDiff = Math.max(maxDiff, diff);
  }

  return maxDiff;
}

// Example usage:
console.log(bobArrayHardness([1, 2, 7]));  // Output: 5
console.log(bobArrayHardness([5]));        // Output: 0
console.log(bobArrayHardness([]));         // Output: 0
console.log(bobArrayHardness([3, 10, 6])); // Output: 7



// Read only region start
const n = input1;
const k = input2;
const arr = input3;

if (n < 1) return 0;
if (k > n - 1) return 0;

let diffs = [];
for (let i = 0; i < n - 1; i++) {
    diffs.push(Math.abs(arr[i + 1] - arr[i]));
}

diffs.sort((a, b) => b - a);

return diffs[k - 1] || 0;

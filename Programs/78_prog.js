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






function Subsequence(input1, input2, input3) {
    let M = input1;
    let arr = input3.slice();
    arr.sort((a, b) => b - a); 
    
    let steps = 0;
    let i = 0;
    while (M > 0 && i < arr.length) {
        M -= arr[i];
        i++;
        steps++;
    }
    return steps;
}

function Subsequence(input1, input2, input3) {
    let M = input1;
    let arr = input3.slice();
    let ops = 0;
    while (M > 0 && arr.length > 0) {
     
        arr.sort((a, b) => b - a);
        
        let D = 0;
        for (let i = 0; i < arr.length; i++) {
            D += Math.max(0, arr[i] - i);
        }
        if (D === 0) break; 
        M -= D;
        ops++;
        arr.splice(0, arr.length);
    }
    return ops;
}

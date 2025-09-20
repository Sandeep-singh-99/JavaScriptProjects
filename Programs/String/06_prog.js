//  Program to find all subsets of a string

let str = "FUN";

let n = str.length;
let totalSubsets = 1 << n; // 2^n subsets
console.log("All subsets of the string:");
for (let i = 0; i < totalSubsets; i++) {
    let subset = "";
    for (let j = 0; j < n; j++) {
        if (i & (1 << j)) {
            subset += str[j];
        }
    }
    console.log(subset);
}
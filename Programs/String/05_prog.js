// Program to divide a string in 'N' equal parts.

let str = "aaabbbccc";
let n = 3;

if (str.length % n !== 0) {
    console.log("The string cannot be divided into equal parts.");
} else {
    let partLength = str.length / n;
    for (let i = 0; i < n; i++) {
        let part = str.slice(i * partLength, (i + 1) * partLength);
        console.log("Part " + (i + 1) + ": " + part);
    }
}


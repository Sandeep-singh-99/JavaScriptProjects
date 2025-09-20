// Program to Count the Total Number of Punctuation Characters Exists in a String 

let str = "Hello, World! Welcome to JavaScript programming.";
let punctuationCount = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === '.' || str[i] === ',' || str[i] === '!' || str[i] === '?' || str[i] === ';' || str[i] === ':') {
        punctuationCount++;
    }
}

console.log("Total number of punctuation characters in the string: " + punctuationCount);
console.log("Length of the given string: " + str.length);
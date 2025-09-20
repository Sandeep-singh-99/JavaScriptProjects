// Program to count the total number of characters in a string

let str = "Sandeep Singh";
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') { 
        count++;
    }
}

console.log("Given string: " + str.length);


console.log("Total number of characters in the string: " + count);
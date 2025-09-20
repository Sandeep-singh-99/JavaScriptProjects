// Program to count the total number of vowels and consonants in a string

let str = "Hello, World! Welcome to JavaScript programming.";
let vowelsCount = 0;
let consonantsCount = 0;

for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (char >= 'a' && char <= 'z') {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            vowelsCount++;
        } else {
            consonantsCount++;
        }
    }
}
console.log("Total number of vowels in the string: " + vowelsCount);
console.log("Total number of consonants in the string: " + consonantsCount);
console.log("Length of the given string: " + str.length);
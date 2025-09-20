// Program to determine whether two strings are the anagram

let str1 = "sand";
let str2 = "dans";

if (str1.length !== str2.length) {
    console.log("The strings are not anagrams.");
}

let sortedStr1 = str1.split('').sort().join('');
let sortedStr2 = str2.split('').sort().join('');

if (sortedStr1 === sortedStr2) {
    console.log("The strings are anagrams.");
} else {
    console.log("The strings are not anagrams.");
}
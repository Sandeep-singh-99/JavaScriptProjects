// Write the code to find the vowels

const findVowels = (str) => {
    let count=0
    const vowels=['a','e','i','o','u']
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++
        }
    }
    return count
}

console.log(findVowels('Sandeep')) 
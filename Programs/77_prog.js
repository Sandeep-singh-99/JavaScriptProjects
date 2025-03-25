// Write the code given if two strings are anagrams of one another the return true

var firstWord = 'Deepak'
var secondWord = 'Deepak'


function isAnagram(one, two) {
    var a = one.toLowerCase()
    var b = two.toLowerCase()

    a = a.split('').sort().join('')
    b = b.split('').sort().join('')

    return a === b
}

console.log(isAnagram(firstWord, secondWord))
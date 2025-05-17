const words = ['sandeep', 'akash', 'sachin', 'rohit', 'komal', 'prakash']

// const ans = words.filter((word) => word.length > 5)

const ans = words.filter((word) => 'sandeep' === word)

console.log(ans);

for (let i = 0; i < words.length; i++)  {
    if (words[i].length > 5) {
        console.log(words[i]);
    }
}


let newArr = []

for (let i = 0; i < words.length; i++) {
    if (words[i].length > 5) {
        newArr.push(words[i])
    }
}

console.log(newArr);

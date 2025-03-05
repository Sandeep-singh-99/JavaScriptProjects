// Create a Promise that rejects if the input is less than 10.

function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num >= 10) {
            resolve('Number is valid')
        } else {
            reject('Number is too small')
        }
    })
}

checkNumber(25)
    .then((message) => console.log(message))
    .catch((message) => console.log(message))
// JS\advanced\promises.js

let promise = new Promise(function (resolve, reject) {
    const x = 'Sandeep'
    const y = 'Sandeep1'

    if (x === y) {
        resolve()
    } else {
        reject()
    }
})

promise.then(function () {
    console.log('Success You are sandeep');
}).catch(function () {
    console.log('Error You are not sandeep');
})
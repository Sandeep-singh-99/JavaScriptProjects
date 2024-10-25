// const a = true

// const myName = new Promise((reslove, reject) => {
//     if (a) {
//         reslove('sandeep')
//     }else {
//         reject('error')
//     }
// })


const a = false

// myName
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))


const myName1 = new Promise((reslove, reject) => {
    if (a) {
        reslove('sandeep')
    }else {
        reject('error')
    }
})

myName1
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
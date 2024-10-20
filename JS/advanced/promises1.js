const a = true

const myName = new Promise((reslove, reject) => {
    if (a) {
        reslove('sandeep')
    }else {
        reject('error')
    }
})

myName
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
const myName = new Promise((reslove, reject) => {
    setTimeout(() => {
        reslove("Sandeep Singh");
    }, 3000);
})

myName.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})
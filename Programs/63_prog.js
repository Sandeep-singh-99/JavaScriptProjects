// Create a Promise that resolves after 2 seconds with the message "Hello World!"

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello World')
    }, 2000)
    console.log("Hello World!!!");
})

promise.then((message) => console.log(message))
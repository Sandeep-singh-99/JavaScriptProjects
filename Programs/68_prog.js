// Use Promise.race() to get the result of the first resolved or rejected promise.

const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, "First"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 500, "Second"));

Promise.race([promise1, promise2])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
// Use Promise.all() to execute multiple promises simultaneously and get their results.

const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, "First"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, "Second"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 3000, "Third"));

Promise.all([promise1, promise2, promise3])
  .then((results) => console.log(results)) 
  .catch((error) => console.log(error));

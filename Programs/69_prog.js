// Use .finally() to execute code after a promise settles, regardless of the outcome.

const promise = new Promise((resolve, reject) => {
    const success = true;
    setTimeout(() => {
      if (success) {
        resolve("Success!");
      } else {
        reject("Failure!");
      }
    }, 1000);
  });
  
  promise
    .then((result) => console.log(result)) 
    .catch((error) => console.log(error))
    .finally(() => console.log("Operation complete.")); 
  
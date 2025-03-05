// Create a promise that resolves with a value if it's even and rejects if it's odd.

function checkEven(num) {
    return new Promise((resolve, reject) => {
      if (num % 2 === 0) {
        resolve(`${num} is even.`);
      } else {
        reject(`${num} is odd.`);
      }
    });
  }
  
  checkEven(4)
    .then((result) => console.log(result)) 
    .catch((error) => console.log(error));
  
  checkEven(6)
    .then((result) => console.log(result))
    .catch((error) => console.log(error)); 
  
// Create a promise chain with multiple .then() calls and .catch() at the end to handle any errors.

function firstOperation() {
    return new Promise((resolve) => resolve(10));
  }
  
  function secondOperation(value) {
    return new Promise((resolve) => resolve(value * 2));
  }
  
  function thirdOperation(value) {
    return new Promise((resolve) => resolve(value + 3));
  }
  
  firstOperation()
    .then((result) => secondOperation(result))
    .then((result) => thirdOperation(result))
    .then((result) => console.log(result)) 
    .catch((error) => console.log("Error:", error));
  
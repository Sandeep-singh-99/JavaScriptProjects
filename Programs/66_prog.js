new Promise((resolve, reject) => {
    reject("Something went wrong!");
  })
    .then((message) => console.log("message: ",message))
    .catch((error) => console.log("error: ",error)); 
  
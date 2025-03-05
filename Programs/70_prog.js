function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  delay(2000).then(() => console.log("This is delayed by 2 seconds"));
  
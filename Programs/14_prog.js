const myMoney = {
    quarters: 4,
    dimes: 10,
    nickels: 20,
    pennies: 100
  }
  
  for (const coin of myMoney){
    console.log(`${coin}: ${myMoney[coin]}`);
  }

/*

The code will actually throw an error. for…of can only be used on objects that implement the @@iterator method. 
See this great article that covers four different ways to loop in JavaScript for more information. for…in would have 
printed off each key:value pair

*/
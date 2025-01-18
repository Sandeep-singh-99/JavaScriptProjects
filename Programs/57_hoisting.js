// Hoisting in javascript
/*
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of 
their containing scope before code execution. Inevitably, this means that no matter where functions and 
variables are declared, they are moved to the top of their scope regardless of whether their scope is 
global or local.

*/

var greeting = 'Hello, World!'

function sayHello() {
    console.log(greeting);
}

sayHello(); // Hello, World!
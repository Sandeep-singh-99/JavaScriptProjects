/*
Closures are a way to store references to variables in some outer scope.
This is a powerful concept that allows us to create functions that can access variables from an outer scope even after the outer 
function has finished executing. 
*/

function Outer() {
    var outerVar = 'I am from outer function';

    function Inner() {
        console.log(outerVar);
    }
    return Inner;
}

var innerFunction = Outer();
innerFunction(); // I am from outer function
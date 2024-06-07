function makeAdder(x) {
    // parameter 'x' is an inner variable

    // inner function 'add()' uses 'x', so
    // it has a "Closure" over 'x'
    function add(y) {
        return y + x;
    }
    return add
}

var plusOne = makeAdder(1) // x is 1, plusOne has a reference to add(y)
var plusTwo = makeAdder(10) // x is 10

console.log(plusOne(3)); // 1 (x) + 3 (y) = 4
console.log(plusTwo(13)); // 10 (x) + 13 (y) = 23

/*
 Reference to inner add function returned is able to remember what x value was passed to makeAdder function call.
*/
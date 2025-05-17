function x () {
    var a = 6
    function y() {
        console.log(a);
    }
    return y
}

var z = x()
console.log(z);
z() 




function createClosure() {
    const value = 6;
    function displayValue() {
        console.log('Value inside closure:', value);
    }
    return displayValue;
}

const closureFunc = createClosure();

console.log('Returned function:', closureFunc); 
closureFunc(); 


function Counter() {
  var count = 0
  this.incrementCount = function () {
    count++
    console.log(count)
  }
}

// console.log(count) // Error: count is not defined
var adder = new Counter()
adder.incrementCount() // 1
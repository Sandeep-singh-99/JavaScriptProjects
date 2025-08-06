var fib = function(n) {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
};
const n = 2;
console.log(`The Fibonacci number for ${n} is ${fib(n)}`); // Output: 5

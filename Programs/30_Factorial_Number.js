// Factorial Number

function Factorial(n) {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact = fact * i
    }

    console.log(`Factorial of ${n} is`,fact);
    
}

Factorial(2)
// Factorial Program

function factorial(n) {
    var fact = 1;
    for (var i = 1; i <= n; i++) {
        fact *= i;
    }

    console.log("Factorial No: ",fact);
}

factorial(5); // 120
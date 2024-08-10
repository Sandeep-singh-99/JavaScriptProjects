// Find Sum of Natural Numbers

function SumOfNaturalNumber(n) {
    let sum = 0
    
    for (let i = 1; i <= n; i++) {
        sum = sum + i
    }

    console.log("Sum of Natural Number:", sum);
    
}

SumOfNaturalNumber(10)
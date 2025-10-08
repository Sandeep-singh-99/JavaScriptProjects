//Prime numbers are numbers greater than 1 that only divide evenly by 1 and themselves

function isPrime(nums) {
    if (nums <= 1) return false;
    for (let i = 2; i <= Math.sqrt(nums); i++) {
        if (nums % i === 0) return false;
    }
    return true;
}

const res = isPrime(11);

if (isPrime(1)) {
    console.log("is a prime number");
} else {
    console.log("is not a prime number");
}

// console.log(isPrime(11)); // true
// console.log(isPrime(15)); // false
// console.log(isPrime(2));
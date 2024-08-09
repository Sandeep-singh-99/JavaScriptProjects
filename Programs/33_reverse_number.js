// How to reverse a number

function Reverse(num) {
    let r, rev = 0;

    while (num > 0) {
        r = num % 10
        rev = (rev * 10) + r
        num = Math.floor(num / 10)
    }

    console.log("Reversed number is: ", rev);
    
}


Reverse(1234)
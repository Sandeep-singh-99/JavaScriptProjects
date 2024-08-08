// Palindrome number

function Palindrome(num) {
    var temp = num,
        rev,
        sum = 0;


    while (num > 0) {
        rev = num % 10;
        sum = (sum * 10) + rev;
        num = Math.floor(num / 10)
    }

    if (sum == temp) {
        console.log("palindrome");
    } else {
        console.log("not palindrome");
        
    }
}

Palindrome(282);

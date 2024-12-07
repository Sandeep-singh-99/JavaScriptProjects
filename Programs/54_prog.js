// Fibonacci series in javascript

function Fibonacci() {
    var n = 10;
    var a = 0, b = 1, c = 0;
    console.log(a);
    console.log(b);

    for (var i = 2; i < n; i++) {
        c = a + b;
        console.log(" "+c);
        a = b;
        b = c;
    }
}

Fibonacci();
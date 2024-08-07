// Fibonacci series
// 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987

function Fibonacci() {
  let n1 = 0,
    n2 = 1,
    n3 = 0;
  const count = 10;

  for (let i = 1; i <= count; i++) {
    console.log(n1);
    n3 = n1 + n2
    n1 = n2;
    n2 = n3
  }
}

console.log(Fibonacci());

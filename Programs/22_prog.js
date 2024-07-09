const res = 10 + isNaN(2) ? 0 : 20
console.log(res);
// 0

// + is executed before ?

const res1 = 10 + (isNaN(2) ? 0 : 20)
console.log(res1);
console.log(isNaN(2));
console.log(Boolean(2));
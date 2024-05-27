// Program to print odd and even number from an array

let arr = [1, 2, 5, 6, 3, 2]

console.log("Odd Numbers: ");
for(let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
        console.log(arr[i]);
    }
}

console.log("Even Numbers: ");
for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0) {
        console.log(arr[i]);
    }
}
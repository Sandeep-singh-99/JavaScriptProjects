function Search(arr, x) {
    let l = 0, r = arr.length - 1;

    while (l <= r) {
        let mid = Math.floor(l + (r - l) / 2)
        if (arr[mid] === x) 
            return mid
        if(arr[mid] < x)
            l = mid + 1
        else
            r = mid - 1
    }
    return -1
}

let arr = [2, 3, 4, 10, 40]
let x = 10

let result = Search(arr, x) 

console.log(result);

if (result === -1)
    console.log('Element is not present');
else
    console.log('Element is found at index: ', result);


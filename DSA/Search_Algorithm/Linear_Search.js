// Linear Search

function Search(arr, x) {
    let len = arr.length;

    for(let i = 0; i < len; i++) {
        if (arr[i] == x)
            return i
    }
    return -i
}

let arr = [2, 3, 4, 10, 40]
const x = 10

let result = Search(arr,x)

if (result === -1)
    console.log("Element is not present");
else
    console.log("Element is present at index: ", result);
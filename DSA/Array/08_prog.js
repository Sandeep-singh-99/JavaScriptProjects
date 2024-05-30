function leftRotate(arr, d, n)
{
    for(let i = 0; i < d; i++)
        leftRotateByOne(arr, n)
}

function leftRotateByOne(arr, n)
{
    let i, temp;
    temp = arr[0]
    for(let i = 0; i < n - 1; i++)
        arr[i] = arr[i + 1]
    arr[n - 1] = temp
}

function printArray(arr, n)
{
    for(let i = 0; i < n; i++)
        console.log(arr[i]);
}

const arr = [1, 2, 3, 4, 5]
const len = arr.length

leftRotate(arr, 2, len)
printArray(arr, len)
// Quick Sort

function Swap(arr, i, j)
{
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function partition(arr, low, high)
{
    let pivot = arr[high]
    let i = Math.floor(low - 1)
    
    for(let j = low; j <= high - 1; j++)
        {
            if(arr[j] < pivot)
                {
                    i++
                    Swap(arr, i, j)
                }
        }

        Swap(arr, i + 1, high)
        return (i + 1)
}

function Quicksort(arr, low, high)
{
    if(low < high)
        {
            let pi = partition(arr, low, high)
            Quicksort(arr, low, pi - 1)
            Quicksort(arr, pi + 1, high)
        }
}

function printArray(arr, size)
{
    for(let i = 0; i < size; i++)
        console.log(arr[i]);
}

let arr = [10, 7, 8, 9, 1, 5]
const n = arr.length
Quicksort(arr, 0, n - 1)
console.log("Sorted array");
printArray(arr, n)
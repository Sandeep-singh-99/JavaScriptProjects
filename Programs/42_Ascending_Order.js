// Sort the elements of an array in ascending order

function AscendingOrder(arr) {
    let temp

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    console.log(arr)
}

AscendingOrder([5, 2, 8, 7, 1])
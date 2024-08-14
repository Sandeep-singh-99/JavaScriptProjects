// Program to print the smallest elements in an array


function SmallestNo(arr) {
    let temp = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < temp) {
            temp = arr[i]
        }
    }

    console.log(temp)
}

SmallestNo([12, 11, 13, 5, 6, 7])
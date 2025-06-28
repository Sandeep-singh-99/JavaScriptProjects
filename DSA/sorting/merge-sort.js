
function mergeSort(arr, l, mid, r) {
    let n1 = mid - l + 1;
    let n2 = r - mid;

    let L = new Array(n1);
    let R = new Array(n2);

    for (let i = 0; i < n1; i++) {
        L[i] = arr[l + i];
    }

    for (let j = 0; j < n2; j++) {
        R[j] = arr[mid + 1 + j];
    }

    let i = 0;
    let j = 0;
    let k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

function sort(arr, l, r) {
    if (l < r) {
        let mid = Math.floor((l + r) / 2);
        sort(arr, l, mid);
        sort(arr, mid + 1, r);
        mergeSort(arr, l, mid, r);
    }
}


function printArray(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        console.log(arr[i]);
    }
}


const arr = [12, 11, 13, 5, 6, 7];
console.log("Unsorted array:");
printArray(arr);
sort(arr, 0, arr.length - 1);
console.log("Sorted array:");
printArray(arr);

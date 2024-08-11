// Find  Frequency of Number

function findFrequency(arr) {
    let fr = [arr.length]
    let flag = -1

    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++;
                fr[j] = flag
            }
        }
        if (fr[i] != flag) {
            fr[i] = count
        }
    }

    for (let i = 0; i < fr.length; i++) {
        if (fr[i] != flag) {
            console.log(arr[i] + "  ||  " + fr[i]);
            
        }
    }
    
}

findFrequency([10, 20, 20, 10, 10, 20, 5, 20])
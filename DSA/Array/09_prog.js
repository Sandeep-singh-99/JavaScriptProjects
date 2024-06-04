// Program to find second smallest number in an array

function findSecondSmallest(arr) {
    if (arr.length < 2) {
        return "Array should have at least two elements";
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (const num of arr) {
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    return secondSmallest;
}

// Example usage
const myArray = [5, 2, 9, 1, 7, 3];
const result = findSecondSmallest(myArray);
console.log(`The second smallest element is: ${result}`);

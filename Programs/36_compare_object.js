// How to compare object in javascript

// Strict Equality Operator

// const obj1 = {
//   name: "Sandeep",
// };

// const obj2 = {
//   name: "Sandeep",
// };

// console.log(obj1 === obj2); // false
// console.log(obj1 === obj1); // true

// shallow equality operator
/*
For a shallow comparison, you need to compare the properties of two objects. 
This involves checking if both objects have the same keys with the same values.
*/

function shallowEqual(objA, objB) {
    if (objA === objB) return true;

    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
        return false
    }

    let keysA = Object.keys(objA);
    let keysB = Object.keys(objB);
  
    if (keysA.length !== keysB.length) return false;
  
    for (let key of keysA) {
      if (objA[key] !== objB[key]) return false;
    }
  
    return true;
}

const obj1 = {
    name: "Sandeep",
    age: 25
}

const obj2 = {
    name: "Sandeep",
    age: 25
}

const obj3 = {
    name: "Akash",
    age: 16
}

console.log(shallowEqual(obj1, obj2)); 
console.log(shallowEqual(obj1, obj3));



const Person = {
    age: 20,
    name: "Sandeep"
}

const arr = [Person, Person, Person]
// const arr = [{...Person}, {...Person}, {...Person}]
arr[1].name = "Ben 10"
console.log(arr[0].name);

/* The arr has three elements, but all three elements are refernces to the same memory space, which is the person object.
 The following will create an arr with three unique object and output Sandeep */
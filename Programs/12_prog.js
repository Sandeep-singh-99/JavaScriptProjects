const name = "Ben"

if (name) {
    name = 'Joe'
    let name = 'Jeff'
}

console.log(name);

/*

The code does not compile. Interestingly, Line 3 fails because let myName is not initialized
to undefined (unlike var myName would have been). If Line 4 were removed, then Line 3 would fail due to 
the inability to override myName declared as a constant outside the code block. Constants cannot be changed.

*/
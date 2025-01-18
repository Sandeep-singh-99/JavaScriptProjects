/*
this keyword is used to refer to the object that is executing the current function. It is used to access 
the properties and methods of the object.  
*/

const person = {
    name: 'john',
    greet: function() {
        console.log("Hello, " + this.name);
    }
}

person.greet() // Hello, john
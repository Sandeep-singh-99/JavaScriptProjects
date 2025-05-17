function a() {
    console.log("I am a normal function");
}

const b = () => {
    console.log("I am a arrow function");
}


const c = (name) => {
    console.log(`My name is ${name}`);
}


const greet = () => {
    const prefix = "Hello"
    return (name) => {
        console.log(`${prefix} ${name}, welcome to the world of JS`);
        
    }
}

console.log(a());

console.log(b());

console.log(c("Sandeep"));



console.log(greet()("Sandeep")); // Hello Sandeep

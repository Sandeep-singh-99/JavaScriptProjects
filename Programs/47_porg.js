class Animal {
    constructor(name) {
        this.name = name;
    }

    sleep() {
        console.log("zzzzzzzz");
        setTimeout(() => {
            console.log(this.name);
        },5000)
    }
}

let animal = new Animal("Sandeep Singh");
animal.sleep()
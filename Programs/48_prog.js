class Animal {
    constructor(name, sound) {
        this.name = name
        this.sound = sound
    }
    speak() {
        console.log(`${this.name} says ${this.sound}`)
    }
}

class Dog extends Animal {
    constructor(name, sound, color) {
        super(name, sound)
        this.color = color
    }
    speak() {
        console.log(`Javascript: ${this.name} says ${this.sound} and color is ${this.color}`)
    }
}

const cat = new Animal("Sandeep Singh", "Meow")
cat.speak()
const dog = new Dog("Sandeep Singh", "Bark", "Black")
dog.speak()
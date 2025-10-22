function Counter() {
    let count = 0;

    return {
        increment: function() {
            count++;
        },

        decrement: function() {
            count--;
        },

        display: function() {
            console.log(count);
        }
    }
}

const myCounter = Counter();
myCounter.increment();
myCounter.display();

myCounter.decrement();
myCounter.display();


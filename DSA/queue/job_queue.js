class TaskQueue {
    constructor() {
        this.queue = [];
    }

    addTask(task) {
        this.queue.push(task);
    }

    async process() {
        while (this.queue.length) {
            const task = this.queue.shift();
            await task();
        }
    }
}

const taskQueue = new TaskQueue();

taskQueue.addTask(async () => 
    console.log("Task 1 started"));

taskQueue.addTask(async () => 
    console.log("Task 2 started"));

taskQueue.process();
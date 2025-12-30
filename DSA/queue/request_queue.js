class RequestQueue {
    constructor(limit) {
        this.queue = [];
        this.limit = limit;
        this.running = 0;
    }

    add(request) {
        this.queue.push(request);
        this.run();
    }

    run() {
        if (this.running >= this.limit || this.queue.length === 0)
            return;

        const req = this.queue.shift();
        this.running++;

        setTimeout(() => {
            console.log("Processed: ", req);
            this.running--;
            this.run();
        }, 1000)
    }
}

const requestQueue = new RequestQueue(2);

requestQueue.add("Request 1");
requestQueue.add("Request 2");
requestQueue.add("Request 3");
requestQueue.add("Request 4");
requestQueue.add("Request 5");
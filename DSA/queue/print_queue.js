class PrintQueue {
    constructor() {
        this.queue = [];
    }

    addJob(job) {
        this.queue.push(job);
    }

    printJob() {
        if (this.queue.length === 0) {
            return "No print jobs in the queue";
        }
        console.log("Printing:", this.queue.shift());
    }
}

const printQueue = new PrintQueue();

printQueue.addJob("Document1.pdf");
printQueue.addJob("Image1.png");
printQueue.addJob("Report1.docx");

printQueue.printJob();
printQueue.printJob();
printQueue.printJob();
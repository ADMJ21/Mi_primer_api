const Queue = require('../structures/Queue');

// Instancia única en memoria
const processingQueue = new Queue();

class QueueRepository {
    enqueue(task) {
        processingQueue.enqueue(task);
        return task;
    }

    dequeue() {
        return processingQueue.dequeue();
    }

    peek() {
        return processingQueue.peek();
    }

    getAll() {
        return processingQueue.toArray();
    }

    isEmpty() {
        return processingQueue.isEmpty();
    }
}

module.exports = new QueueRepository();
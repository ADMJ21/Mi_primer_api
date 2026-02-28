const QueueRepository = require('../repositories/QueueRepository');
const Task = require('../models/Task');

class QueueService {
    addToQueue(title) {
        if (!title) throw new Error("El título de la tarea es requerido");
        const newTask = new Task(title);
        return QueueRepository.enqueue(newTask);
    }

    processNext() {
        if (QueueRepository.isEmpty()) {
            throw new Error("La cola está vacía, no hay tareas por procesar");
        }
        return QueueRepository.dequeue();
    }

    getQueueStatus() {
        return QueueRepository.getAll();
    }

    peekNext() {
        return QueueRepository.peek();
    }
}

module.exports = new QueueService();
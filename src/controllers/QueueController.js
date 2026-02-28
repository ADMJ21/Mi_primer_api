const QueueService = require('../services/QueueService');

class QueueController {
    enqueue(req, res) {
        try {
            const { title } = req.body;
            if (!title) return res.status(400).json({ error: "Title es requerido" });
            
            const task = QueueService.addToQueue(title);
            res.status(201).json(task);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    dequeue(req, res) {
        try {
            const task = QueueService.processNext();
            res.status(200).json({ message: "Tarea procesada correctamente", task });
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    list(req, res) {
        const tasks = QueueService.getQueueStatus();
        res.status(200).json(tasks);
    }

    peek(req, res) {
        const task = QueueService.peekNext();
        if (!task) return res.status(404).json({ error: "No hay tareas en la cola" });
        res.status(200).json(task);
    }
}

module.exports = new QueueController();
const QueueService = require('../services/TaskService');

class QueueService {
    create(req, res) {
        try {
            const { title } = req.body;
            if (!title) return res.status(400).json({ error: "Title es requerido" });
            
            const task = QueueService.createTask(title);
            res.status(201).json(task);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    list(req, res) {
        const tasks = QueueService.getAll();
        res.status(200).json(tasks);
    }

    get(req, res) {
        const task = QueueService.getById(req.params.id);
        if (!task) return res.status(404).json({ error: "Tarea no encontrada" });
        res.status(200).json(task);
    }

    remove(req, res) {
        const success = QueueService.deleteTask(req.params.id);
        if (!success) return res.status(404).json({ error: "Tarea no encontrada para eliminar" });
        res.status(204).send(); // 204 indica éxito pero sin contenido de respuesta
    }
}

module.exports = new QueueService();
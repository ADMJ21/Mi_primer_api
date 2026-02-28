const QueueRepository = require('../repositories/QueueRepository');
const Task = require('../models/Task');

class QueueRepository {
    createTask(title) {
        if (!title) throw new Error("El título es requerido");
        const newTask = new Task(title);
        // Aquí podrías, por ejemplo, llamar también al "UndoService" para registrar la acción
        return QueueRepository.addTask(newTask);
    }

    getAll() {
        return QueueRepository.getAllTasks();
    }

    getById(id) {
        return QueueRepository.getTaskById(id);
    }

    deleteTask(id) {
        return QueueRepository.deleteTask(id);
    }
}

module.exports = new QueueRepository();
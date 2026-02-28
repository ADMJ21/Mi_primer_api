const TaskRepository = require('../repositories/TaskRepository');
const Task = require('../models/Task');

class TaskService {
    createTask(title) {
        if (!title) throw new Error("El título es requerido");
        const newTask = new Task(title);
        // Aquí podrías, por ejemplo, llamar también al "UndoService" para registrar la acción
        return TaskRepository.addTask(newTask);
    }

    getAll() {
        return TaskRepository.getAllTasks();
    }

    getById(id) {
        return TaskRepository.getTaskById(id);
    }

    deleteTask(id) {
        return TaskRepository.deleteTask(id);
    }
}

module.exports = new TaskService();
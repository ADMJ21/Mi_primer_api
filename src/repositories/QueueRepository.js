const LinkedList = require('../structures/LinkedList');

// Instancia única en memoria
const backlog = new LinkedList();

class QueueRepository {
    addTask(task) { return backlog.addLast(task); }
    getAllTasks() { return backlog.getAll(); }
    getTaskById(id) { return backlog.findById(id); }
    deleteTask(id) { return backlog.removeById(id); }
}

module.exports = new QueueRepository();
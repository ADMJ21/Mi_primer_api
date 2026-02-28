const express = require('express');
const TaskController = require('./controllers/TaskController');
const QueueController = require('./controllers/QueueController');

const app = express();
app.use(express.json()); // Para poder recibir JSON en el body
app.use(express.static('public')); // Servir archivos estáticos (HTML, CSS, JS)

// Rutas de Backlog (Lista Enlazada)
app.post('/backlog/tasks', TaskController.create);
app.get('/backlog/tasks', TaskController.list);
app.get('/backlog/tasks/:id', TaskController.get);
app.delete('/backlog/tasks/:id', TaskController.remove);

// Rutas de Queue (FIFO)
app.post('/queue/tasks', QueueController.enqueue);
app.get('/queue/tasks', QueueController.list);
app.get('/queue/tasks/peek', QueueController.peek);
app.delete('/queue/tasks/process', QueueController.dequeue);

// Aquí agregarías las rutas de /undo más adelante...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`TaskFlow API corriendo en http://localhost:${PORT}`);
});
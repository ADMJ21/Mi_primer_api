const express = require('express');
const TaskController = require('./controllers/TaskController');

const app = express();
app.use(express.json()); // Para poder recibir JSON en el body

// Rutas de Backlog (Lista Enlazada)
app.post('/backlog/tasks', TaskController.create);
app.get('/backlog/tasks', TaskController.list);
app.get('/backlog/tasks/:id', TaskController.get);
app.delete('/backlog/tasks/:id', TaskController.remove);

// Aquí agregarías las rutas de /undo y /queue más adelante...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`TaskFlow API corriendo en http://localhost:${PORT}`);
});
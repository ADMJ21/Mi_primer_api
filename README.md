# TaskFlow API - Mi Primer API

## Descripción
**TaskFlow** es una API REST minimalista construida con **Node.js** y **Express.js**. El objetivo de este proyecto es demostrar el uso de estructuras de datos lineales (Lista Enlazada y Cola) aplicadas a la gestión de tareas en memoria, sin dependencia de una base de datos externa.

Este sistema simula el flujo de trabajo de un equipo de desarrollo:
1. **Backlog:** Una lista enlazada para gestionar tareas pendientes de forma flexible.
2. **Cola de Procesamiento (Queue):** Un sistema FIFO (First-In-First-Out) para procesar tareas en el orden en que fueron recibidas.

## Stack Tecnológico
* **Entorno de ejecución:** [Node.js](https://nodejs.org/)
* **Framework Web:** [Express.js](https://expressjs.com/)
* **Librerías:** 
    * `uuid`: Para la generación de IDs únicos.
    * `express.static`: Para servir la interfaz minimalista en `public/`.

## Estructura del Proyecto
```text
src/
├── controllers/    # Lógica de manejo de peticiones y respuestas
├── models/         # Definición del modelo Task
├── repositories/   # Abstracción de acceso a datos (Estructuras en memoria)
├── services/       # Lógica de negocio
├── structures/     # Implementación manual de LinkedList, Queue y Stack
└── app.js          # Punto de entrada y definición de rutas
```

## Instalación y Ejecución

Para poner en marcha el servidor localmente, sigue estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone <url-del-repo>
   cd Mi_primer_api/src
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor:**
   ```bash
   node app.js
   ```
   El servidor se iniciará en `http://localhost:3000`.

## Endpoints de la API

### Backlog (Gestionado con Lista Enlazada)
| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `POST` | `/backlog/tasks` | Crea una nueva tarea en el backlog. Requiere `{ "title": "string" }`. |
| `GET` | `/backlog/tasks` | Lista todas las tareas en el backlog. |
| `GET` | `/backlog/tasks/:id` | Obtiene una tarea específica por su ID. |
| `DELETE` | `/backlog/tasks/:id` | Elimina una tarea del backlog por su ID. |

### Cola de Procesamiento (Gestionado con Queue - FIFO)
| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `POST` | `/queue/tasks` | Añade una tarea al final de la cola de procesamiento. |
| `GET` | `/queue/tasks` | Muestra todas las tareas actualmente en la cola. |
| `GET` | `/queue/tasks/peek` | Observa cuál es la próxima tarea a procesar sin sacarla de la cola. |
| `DELETE` | `/queue/tasks/process` | Procesa (elimina) la tarea al frente de la cola (FIFO). |

## Próximas Funcionalidades
- [ ] **Sistema de Deshacer (Undo):** Implementar un historial de acciones utilizando una **Pila (Stack)** para revertir cambios accidentales.
- [ ] **Priorización:** Modificar la lista para soportar inserción por prioridad.
- [ ] **Persistencia:** Añadir persistencia en archivos JSON o una base de datos real.

---
*Proyecto educativo para el aprendizaje de Estructuras de Datos y Desarrollo de APIs.*

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null; // El primero en la fila (para dequeue)
        this.tail = null; // El último en la fila (para enqueue)
    }

    enqueue(data) {
        const newNode = new Node(data);
        if (!this.tail) {
            // Si la cola está vacía, el nuevo nodo es tanto el inicio como el final
            this.head = this.tail = newNode;
            return;
        }
        // Si ya hay fila, enlazamos el último actual al nuevo, y actualizamos el final
        this.tail.next = newNode;
        this.tail = newNode;
    }

    dequeue() {
        if (!this.head) return null; // Si está vacía
        const removedData = this.head.data;
        this.head = this.head.next; // El inicio ahora es el que seguía en la fila
        
        if (!this.head) {
            this.tail = null; // Si sacamos al único que había, la cola queda totalmente vacía
        }
        return removedData;
    }

    peek() {
        return this.head ? this.head.data : null;
    }

    isEmpty() {
        return this.head === null;
    }

    toArray() {
        const elements = [];
        let current = this.head;
        while (current) {
            elements.push(current.data);
            current = current.next;
        }
        return elements;
    }
}

module.exports = Queue;
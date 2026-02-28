class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null; // El elemento en la cima de la pila
    }

    // Agregar una acción (push)
    push(data) {
        const newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
    }

    // Deshacer la última acción (pop)
    pop() {
        if (!this.top) return null; // Si está vacía
        const poppedData = this.top.data;
        this.top = this.top.next;
        return poppedData;
    }

    // Ver la última acción sin eliminarla (peek)
    peek() {
        return this.top ? this.top.data : null;
    }
}

module.exports = Stack;
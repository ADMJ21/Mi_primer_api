class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addLast(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return newNode.data;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
        return newNode.data;
    }

    getAll() {
        const list = [];
        let current = this.head;
        while (current) {
            list.push(current.data);
            current = current.next;
        }
        return list;
    }

    findById(id) {
        let current = this.head;
        while (current) {
            if (current.data.id === id) return current.data;
            current = current.next;
        }
        return null;
    }

    removeById(id) {
        if (!this.head) return false;
        
        if (this.head.data.id === id) {
            this.head = this.head.next;
            return true;
        }

        let current = this.head;
        while (current.next && current.next.data.id !== id) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
            return true;
        }
        return false;
    }
}
module.exports = LinkedList;
// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {

    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);

    }

    size() {

        let counter = 0;
        let node = this.head;
        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {

        let node = this.head;
        if (!node) {
            return null;
        }

        while (node.next) {
            node = node.next;
        }
        return node;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {

        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previousNode = this.head;
        let node = this.head.next;
        while (node.next) {
            previousNode = node;
            node = node.next;
        }
        previousNode.next = null;
    }

    insertLast(data) {

        const newNode = new Node(data, null);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let node = this.head;
        while (node.next) {
            node = node.next;
        }

        node.next = newNode;


    }

    getAt(n) {

        let counter = 0;
        let node = this.head;
        while (node) {

            if (n === counter) {
                return node;
            }
            node = node.next;
            counter++;
        }

        return null;
    }

    removeAt(index) {

        if (!this.head) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let previous = this.getAt(index - 1);

        if (!previous || !previous.next) {
            return;
        }

        previous.next = previous.next.next;
    }

    insertAt(data, index) {

        if(!this.head) {
            this.head = new Node(data);
            return;
        }

        if(index === 0) {
            this.head  = new Node(data, this.head);
            return
        }

        let previous = this.getAt(index -1 ) || this.getLast();
        const newNode = new Node(data, previous.next);
        previous.next = newNode;
    }

    forEach(fn) {

        let counter = 0;
        let node = this.head;

        while(node) {
            fn(node, counter);
            node=node.next;
            counter++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while(node){
            yield node;
            node=node.next;
        }
    }
}



module.exports = { Node, LinkedList };

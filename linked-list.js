class Node {
    constructor(value = null, next = null){
        this.value = value;
        this.next = next;
    }
}

function linkedList() {
    let firstNode = new Node();

    const append = (value) => {
        let tail = new Node(value, null);
        let current = firstNode;
        while (current.next) {
            current = current.next;
        }
        current.next = tail;
    }

    const prepend = (value) => {
        let first = new Node(value, firstNode)
        firstNode = first
    }

    const size = () => {
        let num = 0;
        let current = firstNode;
        while (current) {
            num += 1
            current = current.next;
        }
        return num;
    }

    const head = () => {
        return firstNode;
    }

    const tail = () => {
        let current = firstNode;
        while (current.next){
            current = current.next;
        }
        return current;
    }

    const at = (index) => {
        let current = firstNode;
        if (index > size()) {
            return "No node found at this index"
        }
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    const pop = () => {
        let current = firstNode;
        let prev = null;
        while (current.next) {
            prev = current;
            current = current.next
        }
        prev.next = null
    }

    const contains = (value) => {
        let current = firstNode;
        while (current) {
            if (current.value === value) {
                return true
            }
            current = current.next;
        }
        return false;
    }

    const find = (value) => {
        let index = 0;
        let current = firstNode;
        while (current) {
            if (current.value === value) {
                return index
            }
            current = current.next;
            index += 1;
        }
        return null;
    }

    const toString = () => {
        let str = ""
        let current = firstNode;
        while (current) {
            str += `(${current.value}) `
            current = current.next;
        }
        str += `${current} `
        return str;
    }

    const insertAt = (value, index) => {
        if (index === 0) {
            prepend(value);
            return
        }
        let current = firstNode;
        let prev = null;
        let i = 0;
        while (i < index && current) {
            prev = current;
            current = current.next;
            i += 1;
        }
        let insertedNode = new Node(value, current)
        prev.next = insertedNode;
    }

    const removeAt = (index) => {
        if (index === 0) {
            firstNode = firstNode.next;
            return
        }
        let current = firstNode;
        let prev = null;
        let i = 0;
        while (i < index && current) {
            prev = current;
            current = current.next;
            i += 1;
        }
        prev.next = current.next;
    }

    return {
        append, 
        prepend, 
        size, 
        head, 
        tail, 
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt
    }
}

//test methods
const list = linkedList()
list.append(50)
list.prepend(30)
list.prepend(500)
list.prepend(89)
list.append(1000)
console.log(list.size())
console.log(list.toString());
console.log(list.head())
console.log(list.tail())
console.log(list.at(3))
list.pop()
console.log(list.toString())
console.log(list.contains(10010))
console.log(list.contains(50))
console.log(list.find(30))
console.log(list.find(4000))
list.insertAt(5000, 2)
console.log(list.toString())
list.removeAt(4)
console.log(list.toString())
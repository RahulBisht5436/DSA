class Node {
    constructor(value) {
        this.value = value
        this.next = null

    }
}

class linkList {
    constructor(headValue) {
        this.head = headValue != undefined ? new Node(headValue) : null
    }

    addAtHead(value) {
        let newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        console.log("New Head Added")
    }

    removeAtHead() {
        if (this.head.next) {
            this.head = this.head.next
            console.log("Removed from the head")
        } else {
            this.head = null
            console.log("Linked List is Empty")
        }

    }

    addNode(value) {
        let nodePointer = this.head
        const newNode = new Node(value)
        while (nodePointer.next !== null) {
            nodePointer = nodePointer.next
        }
        nodePointer.next = newNode
        // this.printLinkedList()
        return "new Node is added"
    }

    removeNode(position) {
        if(this.head == null) return
        if (position) {
            if (position == 1) {
                this.removeAtHead()
            } else {
                let prev = null
                let currNode = this.head
                let nextNode = this.head.next
                let count = 1
                while (count != position) {
                    prev = currNode
                    currNode = nextNode
                    nextNode = newNode.next
                    count++
                }
                prev.next = nextNode
            }
        } else {
            if (this.head == null || this.head.next == null) {
                this.head = null
                console.log("List has been empty")
            } else {
                let nodePointer = this.head
                while (nodePointer.next.next != null) {
                    nodePointer = nodePointer.next
                }
                nodePointer.next = null
                console.log("Last element is removed")
            }
        }


    }

    addAtIndex(value, index) {
        if (index == 1) {
            this.addAtHead(value)
            return
        }
        let currentNode = this.head
        let currindex = 1

        while (currindex != index) {
            currentNode = currentNode.next

            if (currentNode.next == null) {
                console.log("wrong function is called")
                this.addNode(value)
                return
            }

            currindex++
        }
        let newNode = new Node(value)
        newNode.next = currentNode.next
        currentNode.next = newNode
    }



    printLinkedList() {
        let nodePointer = this.head;
        if (this.head == null) return
        while (nodePointer.next !== null) {
            process.stdout.write(`${nodePointer.value} =========>>> `);
            nodePointer = nodePointer.next;
        }
        console.log(nodePointer.value); // Optional: adds a single newline at the very end

    }

    getSize() {
        let nodePointer = this.head;
        if (nodePointer == null) return 0
        let size = 0
        while (nodePointer != null) {
            size++
            nodePointer = nodePointer.next
        }
        return size
    }

}


export { linkList , Node}
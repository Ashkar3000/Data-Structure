class Node{
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    print(){
        let curr = this.head
        while (curr) {
            console.log(curr.value);
            curr = curr.next
        }
    }
    enqueue(value){
        const node = new Node(value);
        if (this.head === null) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size ++
    }
    dequeue(){
        if (this.head === null) {
            return null
        } else {
           const value = this.head.value;
           this.head = this.head.next
           this.size -- 
           return value
        }
    }
    peek(){
        return this.head.value
    }
}

const ll = new Queue();
ll.enqueue(11)
ll.enqueue(22)
ll.enqueue(33)
ll.enqueue(44)
ll.enqueue(55)
ll.print()
console.log("peek element:",ll.peek());
console.log(ll.dequeue())
console.log("dequeue elements:");
ll.print()
console.log("peek element after deletion:",ll.peek());
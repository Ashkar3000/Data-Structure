class Node{
    constructor(value) {
        this.value = value
        this .next = null
    }
}
class Stack{
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
    push(value){
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
    pop(){
        if (this.head === null) {
            return null
        }
        const value = this.tail.value
        if (this.size == 1) {
            this.head == null
            this.tail == null
        } else {
            let prev = this.head
            while (prev.next !=this.tail) {
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size -- 
        return value
    }
    peek(){
        return this.tail.value
    }
    
}

const ll = new Stack();
ll.push(11)
ll.push(22)
ll.push(33)
ll.push(44)
ll.push(55)
ll.print()
console.log("peek element:",ll.peek());
// ll.pop()
console.log("Deleted Element",ll.pop());
console.log("poped elements:");
ll.print()
console.log("peek element after pop:",ll.peek());
class Node{
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Linkedlist{
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    print(){
        let curr = this.head
        while (curr) {
            console.log(curr.value);
            curr = curr.next
        }
    }
    append(value){
        const node = new Node(value);
        if (this.head === null) {
            this.head = node
            this.tail = this.head
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size ++ 
    }

    prepend(value){
        const newnode = new Node(value);
        if (this.head === null) {
            this.head = newnode
            this.tail = this.head
        } else {
            newnode.next = this.head
            this.head = newnode
        }
        this.size++
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
    pop(){
        if (this.head === null) {
            return null
        }
        const value = this.tail.value;  
        if (this.size ==1) {
            this.head = null
            this.tail = null
        } else {
            let prev = this.head
            while (prev.next != this.tail) {
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        } 
        this.size -- 
        return value
    }
}

const ll = new Linkedlist()
console.log(ll.isEmpty());

ll.append(10)
ll.append(20)
ll.append(30)
ll.append(40)
ll.append(50)
ll.print()
console.log("yffjt")
// ll.prepend(10)
// ll.prepend(20)
// ll.prepend(30)
// ll.prepend(40)
// ll.prepend(50)
// ll.pop()
ll.dequeue()
ll.print()


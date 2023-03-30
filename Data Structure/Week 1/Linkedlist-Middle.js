class node{
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

    append(value){
        const newnode = new node(value);
        if (this.head === null) {
            this.head = newnode
            this.tail = this.head
        }else{
            this.tail.next = newnode
            this.tail = newnode
        }

        this.size ++ 
    }

    prepend(value){
        const newnode = new node(value);
        if (this.head === null) {
            this.head = newnode
            this.tail = this.head
        }else{
            newnode.next = this.head
            this.head = newnode
        }
        this.size ++
    }

    print(){
        let curr = this.head
        while (curr) {
            console.log(curr.value);
            curr = curr.next
        }
    }

    findthemiddle() {
    let slow = this.head
    let fast = this.head.next
    while (fast != null) {
        fast = fast.next
        if (fast) {
            fast=fast.next
        }
        slow=slow.next
    }

    console.log("Middle value of Linkedlist:",slow.value);
    
}
}

const li = new Linkedlist();

li.append(10)
li.append(20)
li.append(30)
li.append(40)
li.append(50)
li.append(60)
li.append(70)
li.findthemiddle()

li.print()


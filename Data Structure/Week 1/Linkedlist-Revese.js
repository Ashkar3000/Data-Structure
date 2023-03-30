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

    print(){
        let curr =this.head
        while (curr) {
           console.log(curr.value);
           curr = curr.next
        }
    }

    append(value){
        const node = new Node(value);
        if (this.head == null) {
            this.head = node
            this.tail = this.head
        } else {
           this.tail.next = node
           this.tail = node 
        }
        this.size ++
    }

    prepend(value){
        const node = new Node(value);
        if (this.head == null) {
            this.head = node
            this.tail = this.head
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    reverse(){
        let curr = this.head
        let next
        let prev = null
        while (curr) {
           next = curr.next
           curr.next = prev
           prev = curr
           curr = next
        }
        this.head = prev
    }

}

const ll = new Linkedlist();


ll.append(10)

ll.append(20)

ll.append(30)

ll.reverse()

ll.print()

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class linkedlist{
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

    append(value){
        const node = new Node(value);
        if (this.head === null) {
            this.head = node
            this.tail = this.head
        }else{
            this.tail.next = node
            this.tail = node 
        }
        this.size++
    }

    prepend(value){
        const node = new Node(value);
        if (this.head === null) {
            this.head = node
            this.tail = this.head
        }else{
            node.next = this.head
            this.head = node
        }        
        this.size++
    }

    removeFirst(){
        let curr = this.head
        if (this.head === null) {
            return
        }
        this.head = curr.next  
        this.size --
    }
    removeLast(){
        if (this.head === null) {
            return
        }
        let curr = this.head
        let prev
        while (curr.next) {
            prev = curr
            curr = curr.next
        }
        prev.next = null
        this.tail = prev
    }

    removeduplicate() {
        let temp = this.head;
        while (temp.next != null) {
          let Next = temp.next;
        
            if (temp.value == Next.value) {
              temp.next = Next.next;
            } else{
      
              temp = temp.next;
            }
            
      
            if (temp.next == null) {
                this.tail=temp
            }
         
        }
    }
}

const ll = new linkedlist();

ll.append(10)
ll.append(20)
ll.append(20)
ll.append(30)
ll.append(40)
ll.append(40)
ll.removeduplicate()
ll.removeFirst()
ll.removeLast()
ll.print()
console.log(ll);
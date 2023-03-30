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
        let curr = this.head
        while (curr) {
            console.log(curr.value);
            arr.push(curr.value) //linkedlist to array
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
    }

    prepend(value){
        const node = new Node(value);
        if (this.head === null) {
            this.head = node
            this.tail = this.head
        } else {
            node.next = this.head
            this.head = node
        }
    }
}

const list = new Linkedlist();
 const arr = []//linkedlist to array

for (let i = 0; i < arr.length; i++) { //linkedlist to array
    list.prepend(arr[i])  //linkedlist to array
}  //linkedlist to array

list.append(10)

list.append(20)

list.append(30)

list.print()

console.log(arr); //linkedlist to array
class Queue{
    constructor() {
       this.array = [] 
    }
    enqueue(element){
        this.array.push(element)
    }
    dequeue(){
      return this.array.shift()  
    }
    peek(){
        return this.array[0]
    }
    isEmpty(){
        return this.array.length === 0
    }
    size(){
        return this.array.length
    }
    print(){
        console.log(this.array.toString());
    }
    getMiddle(){
        return this.array[Math.floor(this.array.length/2)]
    } 
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(10),queue.enqueue(20),queue.enqueue(30),queue.enqueue(40),queue.enqueue(50)
queue.print()
console.log("Middle element:",queue.getMiddle());
console.log("deleted element:",queue.dequeue());
console.log("peek element:",queue.peek());
console.log("size of element:",queue.size());
queue.print()
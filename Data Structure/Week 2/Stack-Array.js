class Stack{
    constructor() {
        this.arr = []
    }
    push(element){
        this.arr.push(element)
    }
    pop(){
        return this.arr.pop()
    }
    peek(){
        return this.arr[this.arr.length-1]
    }
    IsEmpty(){
        return this.arr.length === 0
    }
    size(){
        return this.arr.length
    }
    print(){
        console.log(this.arr.toString());
    }
    getMiddle(){
        return this.arr[Math.floor(this.arr.length/2)]
    } 
}
const stack = new Stack();
console.log(stack.IsEmpty());
stack.push(10),stack.push(20),stack.push(60),stack.push(70),stack.push(80)
stack.print()
console.log("Middle element:",stack.getMiddle());
console.log("deleted element:",stack.pop());
console.log("last element:",stack.peek());
console.log("size of element:",stack.size());
stack.print()
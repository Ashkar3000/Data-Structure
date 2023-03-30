class Minheap {
  constructor() {
    this.value = [];
  }
  insert(val) {
    let insertIndx = this.value.length;
    this.value[insertIndx] = val;
    this.bubbleup();
  }
  bubbleup() {
    let indx = this.value.length - 1;
    let element = this.value[indx];
    while (indx > 0) {
      let parentIndx = this.parent(indx);
      let parentElement = this.value[parentIndx];
      if (parentElement < element) break;
      this.value[parentIndx] = element;
      this.value[indx] = parentElement;
      indx = parentIndx;
    }
  }
  remove() {
    if (this.value.length === 0) return null;
    if (this.value.length === 1) return this.value.pop();
    const removed = this.value[0];
    this.value[0] = this.value.pop();
    this.bubbledown();
    return removed;
  }  
  bubbledown() {
    let index = 0;
    let length = this.value.length - 1;
    while (true) {
      let leftindex = this.leftchild(index);
      let rightindex = this.rightChild(index);
      let swap = null;
      if (leftindex < length && this.value[leftindex] < this.value[index]) {
        swap = leftindex;
      }
      if (
        (swap === null && this.value[rightindex] < this.value[index]) ||
        (swap !== null && this.value[rightindex] < this.value[leftindex])
      ) {
        swap = rightindex;
      }
      if (swap === null) {
        break;
      } else {
        [this.value[index], this.value[swap]] = [
          this.value[swap],
          this.value[index],
        ];
        index = swap;
      }
    }
  }
  parent(i) {
    return Math.floor((i - 1) / 2);
    
  }
  leftchild(i) {
    return Math.floor(i * 2 + 1);
  }
  rightChild(i) {
    return Math.floor(i * 2 + 2);
  }
  display() {
    for (let i = 0; i < this.value.length; i++) {
      console.log(this.value[i]);
    }
  }
}

let Ma = new Minheap();
Ma.insert(4);
Ma.insert(7);
Ma.insert(5);
Ma.insert(2);
Ma.insert(9);
Ma.display()
console.log("--------------");
Ma.remove()
Ma.display()

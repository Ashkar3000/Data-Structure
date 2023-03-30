class Node{
    constructor(value) {
        this.value = value
        this.left = null 
        this.right = null
    }
}

class BinarySearchTree{
    constructor() {
        this.root = null
    }

    IsEmpty(){
        return this.root === null
    }

    insert(value){
        const node = new Node(value);
        if (this.IsEmpty()) {
            this.root = node
        }else{
            this.insertNode(this.root , node)
        }
    }

    insertNode(root , node){
        if (node.value < root.value) {
            if (root.left === null) {
                root.left = node
            } else {
                this.insertNode (root.left ,node)
            }
        } else {
            if (root.right === null) {
                root.right = node
            } else {
               this.insertNode(root.right , node) 
            }
        }
    }

    traverse(){
        const  queue = []
        queue.push(this.root)
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }

    validateBST(root = this.root, min = -Infinity, max = +Infinity) {
        if (root === null) {
          return true
        }
        if (root.value >= max || root.value <= min) return false
    
        return (
          this.validateBST(root.left, min, root.value) &&
          this.validateBST(root.right, root.value, max)
        )
    }
}

const bst = new BinarySearchTree();
console.log(bst.IsEmpty());

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
console.log("Is this a Validate Binary Tree ?",bst.validateBST());
bst.traverse()
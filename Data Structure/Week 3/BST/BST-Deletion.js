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
    
    levelOrder(){
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

   delete(value){
        this.root = this.deleteNode(this.root , value)
    }

    deleteNode(root,value){
        if (root === null) {
            return root
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left,value)
        }else if (value > root.value) {
            root.right = this.deleteNode(root.right,value)
        } else {
            if (!root.left && !root.right) {
                return null
            }
            if (!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right , root.value)
        }
        return root
    }
}

const bst = new BinarySearchTree();
console.log(bst.IsEmpty());
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
console.log("===levelOrder===");
bst.levelOrder()
bst.delete(3)
console.log("===After Element Deleted===");
bst.levelOrder()

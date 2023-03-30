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

    min(root){
        if (!root.left) {
            return root.value
        } else {
          return this.min(root.left)  
        }
    }

    max(root){
        if (!root.right) {
            return root.value
        } else {
          return this.max(root.right)  
        }
    }
}

const bst = new BinarySearchTree();
console.log(bst.IsEmpty());
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
console.log("===mini===");
console.log(bst.min(bst.root));
console.log("===max===");
console.log(bst.max(bst.root));


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

    traverse(tree = this.root){
        const queue = [tree]
        while (queue.length) {
            let node = queue.shift()
            if (node === null) {
               return 0 
            }
            console.log(node.value);
            queue.push(node.left)
            queue.push(node.right)
        }
    }

    isCompleteTree(root = this.root) {
        let traversal_queue = [root];
        let prevNode = root;
    
        // Launch level-order traversall
        while (traversal_queue.length) {
          let curNode = traversal_queue.shift();
    
          if (curNode != null) {
            if (prevNode == null) {
              // Empty in the middle means this is not a complete binary tree (not left-compact)
              return false;
            }
    
            traversal_queue.push(curNode.left);
            traversal_queue.push(curNode.right);
          }
    
          // update previous node
          prevNode = curNode;
        }    
        return true;
    }
}

const bst = new BinarySearchTree();
console.log(bst.IsEmpty());

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
console.log("Is this a Complete Binary Tree ?",bst.isCompleteTree());
bst.traverse()
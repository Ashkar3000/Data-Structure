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
    search(root , value){
        if (!root) {
            return false
        } else {
            if (value === root.value) {
                return true
            } else if (value < root.value) {
                return this.search(root.left ,value)
            } else {
                return this.search (root.right,value)
            } 
        }
    }
    // Depth First Search DFS
    preOrder(root){
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }
    inOrder(root){
        if (root) {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }
    //Breadth First Search
    levelOrder(tree = this.root){
        const  queue = [tree]
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
        } else  {
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
    height() {
        return this.maxDepth(this.root);
      }    
      maxDepth(root) {
        if (root == null) return 0;
        else {
          let lDepth = this.maxDepth(root.left)
          let rDepth = this.maxDepth(root.right)
    
          if (lDepth > rDepth) return lDepth + 1;
          else return rDepth + 1;
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
console.log(bst.search(bst.root ,25));
console.log(bst.search(bst.root ,5));
console.log("===preOrder===");
bst.preOrder(bst.root)
console.log("===inOrder===");
bst.inOrder(bst.root)
console.log("===postOrder===");
bst.postOrder(bst.root)
console.log("===levelOrder===");
bst.levelOrder()
console.log("===mini===");
console.log(bst.min(bst.root));
console.log("===max===");
console.log(bst.max(bst.root));
console.log("Height of tree:",bst.height());
console.log("Is this a Complete Binary Tree ?",bst.isCompleteTree());
console.log("Is this a Validate Binary Tree ?",bst.validateBST());
bst.delete(5)
console.log("===levelOrder===");
bst.levelOrder()

class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      node.isEndOfWord = true;
    }
  
    search(word) {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      return node.isEndOfWord;
    }
  
    display(node = this.root, prefix = '') {
      if (node.isEndOfWord) {
        console.log(prefix);
      }
      for (let child in node.children) {
        let newPrefix = prefix + child;
        this.display(node.children[child], newPrefix);
      }
    }
  }
  let trie = new Trie();
  trie.insert("apple");
  trie.insert("banana");
  trie.insert("orange");
  console.log(trie.search("apple")); // true
  console.log(trie.search("grape")); // false
  trie.display();  
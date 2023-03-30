class Graph {
    constructor() {
      this.adjList = new Map(); // to store the graph
    }
  
    // Add a node to the graph
    addNode(node) {
      this.adjList.set(node, []);
    }
  
    // Add an edge between two nodes
    addEdge(node1, node2) {
      this.adjList.get(node1).push(node2);
      this.adjList.get(node2).push(node1);
    }
  
    // Breadth-First Search
    bfs(startNode) {
      const visited = new Set();
      const queue = [];
  
      visited.add(startNode);
      queue.push(startNode);
  
      while (queue.length > 0) {
        const node = queue.shift();
        console.log(node);
  
        this.adjList.get(node).forEach((neighbor) => {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        });
      }
    }
  
    // Depth-First Search
    dfs(startNode) {
      const visited = new Set();
  
      const dfsHelper = (node) => {
        visited.add(node);
        console.log(node);
  
        this.adjList.get(node).forEach((neighbor) => {
          if (!visited.has(neighbor)) {
            dfsHelper(neighbor);
          }
        });
      };
  
      dfsHelper(startNode);
    }
  }
const myGraph = new Graph();
  
  myGraph.addNode(1);
  myGraph.addNode(2);
  myGraph.addNode(3);
  myGraph.addNode(4);
  myGraph.addNode(5);
  
  myGraph.addEdge(1, 2);
  myGraph.addEdge(1, 3);
  myGraph.addEdge(2, 4);
  myGraph.addEdge(2, 5);
  myGraph.bfs(1); // start BFS from node 1
  console.log("***************");
  myGraph.dfs(1); // start DFS from node 1
      
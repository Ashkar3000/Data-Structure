class Graph{
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1) 
        }if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2) 
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    display(){
        for (let vertex in this.adjacencyList) {
            console.log(vertex + "=>" + [...this.adjacencyList[vertex]]);            
        }
    }
    hasEdge(vertex1 , vertex2){
        return(            
        this.adjacencyList[vertex1].has(vertex2)&&
        this.adjacencyList[vertex2].has(vertex1)
        )
    }
    removeEdge(vertex1 , vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if (!this.adjacencyList[vertex]) {
            return
        }
        for (let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex , adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
    dfs(startNode) {
        const visited = new Set();    
        const dfsHelper = (node) => {
          visited.add(node);
          console.log(node);    
          this.adjacencyList[node].forEach((neighbor) => {
            if (!visited.has(neighbor)) {
              dfsHelper(neighbor);
            }
          })
        }    
        dfsHelper(startNode);
      }
    bfs(start) {
        const visited = new Set(); 
        const queue = [start];    
        while (queue.length) {
          const node = queue.shift(); 
          visited.add(node); 
          console.log(node);
          this.adjacencyList[node].forEach((neighbor) => {
            if (!visited.has(neighbor)) {
              visited.add(neighbor);
              queue.push(neighbor);
            }
          });
        }
    }
}

const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);;
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2 , 3);
graph.addEdge(2, 4);
graph.addEdge(2, 5);
graph.display()
console.log("---DFS---");
graph.dfs(1)
console.log("---BFS---");
graph.bfs(1)
console.log("---Removed Edge---");
graph.removeEdge(1 , 3);
graph.display()
console.log("---Removed Vertex---");
graph.removeVertex(4)
graph.display()

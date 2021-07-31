class Vertex {
    constructor(data) {
        this.data = data;
        this.visited = false;
        this.edges = new Set();// Unique list of edges
    }
}

class Edge {
    constructor(v1, v2) {
        this.start = v1;// Vertex
        this.end = v2;//Vertex
        this.weight = null;
    }
}

class Graph {
    constructor() {
        //List of Vertex is required here
        //For reduced complexity of searching for vertex, we can have a Map<data, Vertex>
        this.vertices = new Map(); //List of Vertex
    }

    printgraph(graph) {
        for(let [key, vertex] of graph.vertices) {
            let edges = "";
            for(let edge of vertex.edges) {
                edges += "["+edge.start.data+","+edge.end.data+ (edge.weight ? ","+edge.weight : "") + "]";
            }
            console.log(key + " -> " + edges);
        }
    }

    /**
     * @param {*} graph : Graph object
     * @param {*} edges : Array of tuples [[0,1],[1,2], etc]
     */
    insert(graph, edges) {
        if(edges == null || edges.length == 0) {
            console.log("Edges empty. Nothing to insert.");
            return;
        }
        if(graph == null) {
            graph = new Graph();
        }

        //prepare edges array
        for(let i=0; i<edges.length; i++) {

            //get start and end vertex of an edge
            let startVertex = graph.vertices.get(edges[i][0]);
            let endVertex = graph.vertices.get(edges[i][1]);
            if(!startVertex) {
                startVertex = new Vertex(edges[i][0]);
                graph.vertices.set(edges[i][0], startVertex);
            }
            if(!endVertex) {
                endVertex = new Vertex(edges[i][1]);
                graph.vertices.set(edges[i][1], endVertex);
            }

            //add edge to vertex
            let edge = new Edge(startVertex, endVertex);
            edge.weight = edges[i][2] ? edges[i][2] : null;
            startVertex.edges.add(edge);
        }
        return graph;
    }

    deleteedge(graph, edge) {

    }
}

module.exports = Graph;
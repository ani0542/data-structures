const DisjointSet = require('./disjointset');

/**
 * Kruskal's algorithm is used to find minimum spanning tree for a given graph.
 * 
 * Applicable for garphs -
 * connected
 * undirected
 * having non-negative weights
 * 
 * @param {Graph} graph Graph on which to apply Kruskal's algorithm
 */
function kruksal(graph) {

    if(graph == null) {
        console.log("Given graph is null.");
        return null;
    }

    //collect all the edges of the graph
    let edges = new Set();
    for(let vertex of graph.vertices.values()) {
        if(vertex.edges.size > 0) {
            edges.add(...vertex.edges);
        }
    }
    //sort all edges on weight
    let edgeArr = Array.from(edges);
    edgeArr.sort((e1,e2) => e1.weight - e2.weight);

    //make each edge is a disjoint set
    let disjointset = new DisjointSet();
    disjointset = disjointset.makeset(disjointset, Array.from(graph.vertices.keys()));

    //Iterate over each disjoint set and merge if disjoint
    for(let edge of edgeArr) {
        disjointset = disjointset.findandmerge(disjointset, [edge.start.data, edge.end.data]);
    }

    console.log("Kruskal minimum spanning Tree :")
    disjointset.printdisjointset(disjointset);

    return disjointset;
}


function runTest() {
    let Graph = require('./graph.js');

    //Initialize Trie with array
    let graph = new Graph();
    let dataArray = [['a','b',4],['a','c',2],['b','c',1],['b','d',5],['c','d',8],['c','e',10],['d','e',2],['d','f',6],['e','f',3]];

    console.log();
    console.log("** Insert vertex to graph **");
    graph = graph.insert(graph, dataArray);

    console.log();
    console.log("** Print Graph **");
    graph.printgraph(graph);

    console.log();
    console.log("** Kruskal minimum spanning Tree **");
    kruksal(graph);
}

runTest();
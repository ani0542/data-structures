const Queue = require('../Queues/queue');

/**
 * Dijkstra's algorithm is used to find the shortest path between two given vertex in a graph
 * This algo and its modified ersions are widely used.
 * 
 * Applicable for graphs -
 * connected
 * directed
 * having non-negative weights
 * 
 * @param {Graph} graph Graph on which to apply Dijkstra algorithm
 * @param {string/number} source Source Vertex identifier
 * @param {string/number} destination Destination vertex identifier
 */
function dijkstra(graph, source, destination) {

    if(graph == null) {
        console.log("Given graph is null.");
        return null;
    }

    // We need to keep the below information for each vertex in graph
    // Map<vertex, [distanceFromSource, parent]>
    let distanceMap = new Map();

    // Initialize map for each vertex with distanceFromSource=0 and parent=self
    for(let vertex of graph.vertices.keys()) {
        distanceMap.set(vertex, [-1, vertex]);
    }

    let q = new Queue(graph.vertices.size);
    q.enqueue(source);
    distanceMap.set(source, [0, source]);

    while(!q.isEmpty()) {
        let vertex = q.dequeue();
        let vtxDistFrmSrc = distanceMap.get(vertex)[0];
        let vtxParent = distanceMap.get(vertex)[1];

        //Iterate over all neighbours of selected vertex
        for(let edge of graph.vertices.get(vertex).edges) {
            let neighbour = edge.end.data;
            //calculate distance of neighbour from source
            let nbrDistFrmSrc = distanceMap.get(neighbour)[0];
            let nbrDistFrmSrcViaVtx = vtxDistFrmSrc + edge.weight;
            if(nbrDistFrmSrc == -1 || nbrDistFrmSrcViaVtx < nbrDistFrmSrc) {
                distanceMap.set(neighbour, [nbrDistFrmSrcViaVtx, vertex]);
            }
            // add neighbour to queue
            q.enqueue(neighbour);
        }
    }

    //print shortest distance and path source to destination
    console.log("Shortest distance = " + distanceMap.get(destination)[0]);
    let temp = destination;
    let sPath = destination;

    while(temp != source) {
        temp = distanceMap.get(temp)[1];
        sPath = temp + '->' + sPath;
    }
    console.log("Shortest path = " + sPath);
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
    console.log("** Dijkstra shortest path between a->f **");
    dijkstra(graph, 'a', 'f');
    // dijkstra(graph, 'c', 'f');
}

runTest();
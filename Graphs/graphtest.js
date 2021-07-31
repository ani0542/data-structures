function runTest() {
    let Graph = require('./graph.js');

    //Initialize graph
    let graph = new Graph();
    let dataArray = [['a','b'],['a','c'],['b','c'],['b','d'],['c','d'],['c','e'],['d','e'],['d','f'],['e','f']];

    console.log();
    console.log("** Insert vertex to graph **");
    graph = graph.insert(graph, dataArray);

    console.log();
    console.log("** Print Graph **");
    graph.printgraph(graph);

    //Initialize graph with weight
    let graph2 = new Graph();
    let dataArray2 = [['a','b',4],['a','c',2],['b','c',1],['b','d',5],['c','d',8],['c','e',10],['d','e',2],['d','f',6],['e','f',3]];

    console.log();
    console.log("** Insert vertex to graph **");
    graph2 = graph2.insert(graph2, dataArray2);

    console.log();
    console.log("** Print Graph with weight**");
    graph2.printgraph(graph2);
}

runTest();
/*
* Given tree, find all nodes at depth k
*/

function nodesatdepth(root, k, output) {
    if(root == null) {
        return;
    }
    if(k == 0) {
        output.push(root.data);
        return;
    }
    nodesatdepth(root.left, k-1, output);
    nodesatdepth(root.right, k-1, output);
}

function runTest() {
    let BinarySearchTree = require('./BinarySearchTree.js');
    let ArrayGenerator = require('../Utilities/arrayGenerator.js');
    let dataArray = ArrayGenerator.generateArray(8, {min:0, max:30, includeRepeated:false});
    console.log();
    console.log("Input data : "+ dataArray);

    let bst = new BinarySearchTree();
    dataArray.forEach(value => {bst.root = bst.insert(bst.root, value)});
    bst.printTree(bst.root);

    console.log();
    console.log("** Nodes at depth 3 **");
    let output = [];
    nodesatdepth(bst.root, 3, output);
    console.log(output);
}

runTest();
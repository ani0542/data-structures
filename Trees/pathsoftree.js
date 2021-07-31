/*
* Given a tree print all paths from root to leaf
*/

function allpaths(root, path) {
    if(root == null) {
        console.log("Root is null");
        return;
    }
    //Print path when leaf is found
    if(root.left == null && root.right == null) {
        console.log(path);
    }
    if(root.left != null) {
        path.push(root.left.data);
        allpaths(root.left, path);
    }
    if(root.right != null) {
        path.push(root.right.data);
        allpaths(root.right, path);
    }
    path.splice(path.length-1, 1);
}

function printpath(path) {
    let size = path.size();
    let output = [];
    while(!path.isEmpty()) {
        console.log(size, path.size());
        output[--size] = path.pop().data;
    }
    console.log("Path : "+ output);
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
    console.log("** All paths **");
    let arr = [];
    arr.push(bst.root.data);
    allpaths(bst.root, arr);
}

runTest();
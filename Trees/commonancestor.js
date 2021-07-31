/*
* Given two nodes of a BST, find common ancestor
*/

function commonancestorwrapper(root, data1, data2) {
    if(root == null) {
        console.log("Root is null");
        return null;
    }
    let node1 = root;
    while(node1 != null && node1.data != data1) {
        if(data1 < node1.data) {
            node1 = node1.left;
        }
        else if(data1 > node1.data) {
            node1 = node1.right;
        }
    }
    if(node1 == null) {
        console.log(data1 + " is not found in Tree.");
        return null;
    }

    let node2 = root;
    while(node2 != null && node2.data != data2) {
        if(data2 < node2.data) {
            node2 = node2.left;
        }
        else if(data2 > node2.data) {
            node2 = node2.right;
        }
    }
    if(node2 == null) {
        console.log(data2 + " is not found in Tree.");
        return null;
    }

    if(data1 < data2) {
        return commonancestor(root, data1, data2);
    }
    else { 
        return commonancestor(root, data2, data1);
    }
}

function commonancestor(root, smalldata, bigdata) {
    if(root.data < smalldata) {
        return commonancestor(root.right, smalldata, bigdata);
    }
    else if(root.data > bigdata) {
        return commonancestor(root.left, smalldata, bigdata);
    }
    else {
        return root;
    }
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
    console.log("** Common Ancestor **");
    console.log("Given nodes - " + dataArray[2] + " , " + dataArray[4]);
    let ca = commonancestorwrapper(bst.root, dataArray[2], dataArray[4])
    console.log(ca ? ca.data : "null");
}

runTest();
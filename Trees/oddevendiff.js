/*
* Given tree, find difference between sum of odd nodes and even nodes
*/

function oddevendiff(root) {
    if(root == null) {
        return 0;
    }

    return (root.data%2 == 0 ? root.data : (-1*root.data)) +
        oddevendiff(root.left) +
        oddevendiff(root.right);
}

function runTest() {
    let BinarySearchTree = require('./BinarySearchTree.js');
    let ArrayGenerator = require('../Utilities/arrayGenerator.js');
    let dataArray = ArrayGenerator.generateArray(4, {min:0, max:30, includeRepeated:false});
    console.log();
    console.log("Input data : "+ dataArray);

    let bst = new BinarySearchTree();
    dataArray.forEach(value => {bst.root = bst.insert(bst.root, value)});
    bst.printTree(bst.root);

    console.log();
    console.log("** Difference of sum between odd and even nodes **");
    console.log(oddevendiff(bst.root));
}

runTest();

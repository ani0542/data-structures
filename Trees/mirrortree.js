function mirrortree(root) {
    if(root == null) {
        return null;
    }

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    mirrortree(root.right);
    mirrortree(root.left);
}

function mirroriterative(root) {
    
}

function runTest() {
    let BinarySearchTree = require('./BinarySearchTree.js');
    let ArrayGenerator = require('../Utilities/arrayGenerator.js');
    let dataArray = ArrayGenerator.generateArray(8, {min:0, max:30, includeRepeated:false});
    console.log();
    console.log("Input data : "+ dataArray);

    let bst = new BinarySearchTree();
    dataArray.forEach(value => {bst.root = bst.insert(bst.root, value)});
    let output = [];
    bst.printTree(bst.root);

    console.log();
    console.log("** Mirror Tree **");
    mirrortree(bst.root);
    bst.printTree(bst.root);
}

runTest();
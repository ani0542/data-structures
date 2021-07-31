/*
* Given two trees, compare each node to check if the trees are identical
*/

function compareTrees(root1, root2) {
    if(root1 == null && root2 == null) {
        return true;
    }
    if(root1 == null || root2 == null) {
        return false;
    }
    return root1.data == root2.data &&
        compareTrees(root1.left, root2.left) &&
        compareTrees(root1.right, root2.right);
}

function runTest() {
    let ArrayGenerator = require('../Utilities/arrayGenerator.js');
    let BinarySearchTree = require('./binarysearchtree.js');

    //Initialize LinkedList with random array
    let bst1 = new BinarySearchTree();
    let dataArray = ArrayGenerator.generateArray(5, {min:0, max:30, includeRepeated:false})
    console.log();
    dataArray.forEach(value => {bst1.root = bst1.insert(bst1.root, value)});
    console.log("Tree 1 : ");
    bst1.printTree(bst1.root);

    //Initialize LinkedList with random array
    let bst2 = new BinarySearchTree();
    console.log();
    dataArray.forEach(value => {bst2.root = bst2.insert(bst2.root, value)});
    console.log("Tree 2 : ");
    bst2.printTree(bst2.root);

    //Initialize LinkedList with random array
    let bst3 = new BinarySearchTree();
    let dataArray3 = ArrayGenerator.generateArray(5, {min:0, max:30, includeRepeated:false})
    console.log();
    dataArray3.forEach(value => {bst3.root = bst3.insert(bst3.root, value)});
    console.log("Tree 3 : ");
    bst3.printTree(bst3.root);

    console.log();
    console.log("** Trees Identical **");
    console.log("Tree1 & Tree2 : "+ compareTrees(bst1.root, bst2.root));
    console.log("Tree1 & Tree3 : "+ compareTrees(bst1.root, bst3.root));
}

runTest();
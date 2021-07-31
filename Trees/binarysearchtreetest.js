function runTest() {
    let ArrayGenerator = require('../Utilities/arrayGenerator.js');
    let BinarySearchTree = require('./binarysearchtree.js');

    //Initialize LinkedList with random array
    let bst = new BinarySearchTree();
    let dataArray = ArrayGenerator.generateArray(5, {min:0, max:30, includeRepeated:false})

    console.log("=====BinarySearchTree output=====");
    console.log();
    console.log("Input data : "+ dataArray);

    console.log();
    console.log("**Insert iterative**");
    dataArray.forEach(value => {bst.root = bst.insert(bst.root, value)});
    console.log("printTree : ");
    bst.printTree(bst.root);

    console.log();
    console.log("**Search iterative**");
    console.log("Searching for : "+ dataArray[2]);
    console.log("Found : " + bst.search(bst.root, dataArray[2]).data);

    console.log();
    console.log("**Inorder Successor");
    console.log("Next largest element for : "+ dataArray[2]);
    let successor = bst.inordersuccessor(bst.root, dataArray[2]);
    console.log("Found : "+ (successor ? successor.data : null));

    console.log();
    console.log("**Delete iterative**");
    console.log("Deleting : "+ dataArray[2]);
    bst.root = bst.delete(bst.root, dataArray[2]);
    console.log("printTree : ");
    bst.printTree(bst.root);

    console.log();
    console.log("**Insert recursive**");
    bst = new BinarySearchTree();
    dataArray.forEach(value => {bst.root = bst.insertrecursive(bst.root, value)});
    console.log("printTree : ");
    bst.printTree(bst.root);
  
    console.log();
    console.log("**Search recursive**");
    console.log("Searching for : "+ dataArray[2]);
    console.log("Found : " + bst.searchrecursive(bst.root, dataArray[2]).data);

    console.log();
    console.log("**Delete recursive**");
    console.log("Deleting : "+ dataArray[2]);
    bst.root = bst.deleterecursive(bst.root, dataArray[2]);
    console.log("printTree : ");
    bst.printTree(bst.root);

    console.log();
    console.log("**Treeminimum recursive**");
    console.log("Treeminimum : " + bst.treeminimum(bst.root).data);

    console.log();
    console.log("**Treemaximum recursive**");
    console.log("Treemaximum : " + bst.treemaximum(bst.root).data);
  }

  runTest();
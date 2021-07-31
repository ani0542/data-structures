let Queue = require('../Queues/queue.js');

function levelordertraversal(root) {
    if(root == null) {
        console.log("Root is null");
    }
    let output = [];
    let queue = new Queue(10);
    queue.enqueue(root);

    while(!queue.isEmpty()) {
        let node = queue.dequeue();
        output.push(node.data);

        if(node.left != null) {
            queue.enqueue(node.left);
        }
        if(node.right != null) {
            queue.enqueue(node.right);
        }
    }
    return output;
}

function runTest() {
    let BinarySearchTree = require('./BinarySearchTree.js');
    let ArrayGenerator = require('../Utilities/arrayGenerator.js');
    let dataArray = ArrayGenerator.generateArray(5, {min:0, max:30, includeRepeated:false});
    console.log();
    console.log("Input data : "+ dataArray);

    let bst = new BinarySearchTree();
    dataArray.forEach(value => {bst.root = bst.insert(bst.root, value)});
    console.log("Level Order Traversal = " + levelordertraversal(bst.root));
}

runTest();
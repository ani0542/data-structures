let Stack = require('../Stacks/stack.js');

function inordertraversal(root, output) {
    if(root == null) {
        return;
    }
    inordertraversal(root.left, output);
    output.push(root.data);
    inordertraversal(root.right, output);
}

function inordertraversaliterative(root, output) {
    if(root == null) {
        return;
    }
    let s = new Stack();

    //Push to stack all left nodes of tree
    let temp = root;
    while(temp != null) {
        s.push(temp);
        temp = temp.left;
    }

    //Handle right child
    //Push to stack all left nodes of right child
    //Repeat process for all right child
    while(!s.isEmpty()) {
        let node = s.pop();
        output.push(node.data);

        if(node.right != null) {
            temp = node.right;
            while(temp != null) {
                s.push(temp);
                temp = temp.left;
            }
        }
    }
    return output;
}

function preordertraversal(root, output) {
    if(root == null) {
        return;
    }
    output.push(root.data);
    preordertraversal(root.left, output);
    preordertraversal(root.right, output);
}

function preordertraversaliterative(root, output) {
    if(root == null) {
        return null;
    }
    let s = new Stack();
    s.push(root);

    while(!s.isEmpty()) {
        let node = s.pop();
        output.push(node.data);

        if(node.right != null) {
            s.push(node.right);
        }
        if(node.left != null) {
            s.push(node.left);
        }
    }
    return output;
}

function postordertraversal(root, output) {
    if(root == null) {
        return;
    }
    postordertraversal(root.left, output);
    postordertraversal(root.right, output);
    output.push(root.data);
}

function postordertraversaliterative(root, output) {
    if(root == null) {
        return;
    }
    let s1 = new Stack(), s2 = new Stack();
    s1.push(root);

    while(!s1.isEmpty()) {
        let node = s1.pop();

        if(node.left != null) {
            s1.push(node.left);
        }
        if(node.right != null) {
            s1.push(node.right);
        }
        s2.push(node);
    }

    while(!s2.isEmpty()) {
        output.push(s2.pop().data);
    }
    return output;
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
    inordertraversal(bst.root, output);
    console.log("inordertraversal : "+ output);
    output = [];
    inordertraversaliterative(bst.root, output);
    console.log("inordertraversaliterative : "+ output);
    output = [];
    preordertraversal(bst.root, output);
    console.log("preordertraversal : "+ output);
    output = [];
    preordertraversaliterative(bst.root, output);
    console.log("preordertraversaliterative : "+ output);
    output = [];
    postordertraversal(bst.root, output);
    console.log("postordertraversal : "+ output);
    output = [];
    postordertraversaliterative(bst.root, output);
    console.log("postordertraversaliterative : "+ output);
}

runTest();
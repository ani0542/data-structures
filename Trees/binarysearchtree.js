let Queue = require('../Queues/queue.js');

class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Method to print the level order traversal of a tree
    printTree(root) {
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
        console.log("Tree : " + output);
    }

    insert(root, data) {
        let node = new TreeNode(data);
        if(root == null) {
            root = node;
            return root;
        }

        let temp = root;
        let parent = null, isLeftChild = false;
        while(temp != null) {
            parent = temp;
            if(data < temp.data) {
                temp = temp.left;
                isLeftChild = true;
            }
            else if( data > temp.data) {
                temp = temp.right;
                isLeftChild = false;
            }
            else {
                console.log("Data already exists. Cannot insert");
            }
        }
        if(isLeftChild) {
            parent.left = node;
        }
        else {
            parent.right = node;
        }
        return root;
    }

    insertrecursive(root, data) {
        if(root == null) {
            let node = new TreeNode(data);
            return node;
        }
        if(data < root.data) {
            root.left = this.insertrecursive(root.left, data);
        }
        else if(data > root.data) {
            root.right = this.insertrecursive(root.right, data);
        }
        else {
            console.log("Data already exists. Cannot insert");
        }
        return root;
    }

    search(root, data) {
        if(root == null || data == root.data) {
            return root;
        }
        let temp = root;
        while(temp != null && data != temp.data) {
            temp = data<temp.data ? temp.left : temp.right;
        }
        return temp;
    }
    
    searchrecursive(root, data) {
        if(root == null || data == root.data) {
            return root;
        }
        if(data < root.data) {
            return this.searchrecursive(root.left, data);
        }
        //if(data > root.data)
        return this.searchrecursive(root.right, data);
    }

    treeminimum(root) {
        if(root == null) {
            return root;
        }
        let temp = root;
        while(temp.left != null) {
            temp = temp.left;
        }
        return temp;
    }

    treemaximum(root) {
        if(root == null) {
            return root;
        }
        let temp = root;
        while(temp.right != null) { 
            temp = temp.right;
        }
        return temp;
    }

    inordersuccessor(root, data) {
        if(root == null) {
            return root;
        }
        let node = this.search(root, data);
        if(node == null) {
            console.log("Data not found in tree.");
            return null;
        }

        //Check for right child
        if(node.right != null) {
            return this.treeminimum(node.right);
        }
        else {
            let temp = root;
            let successor = temp;
            while(temp != null && data != temp.data) {
                if(data < temp.data) {
                    successor = temp;
                    temp = temp.left;
                }
                else {
                    temp = temp.right;
                }
            }
            if(data > successor.data) {
                console.log("Data is largest element. No successor found.");
                return null;
            } 
            return successor;
        }
    }

    deleterecursive(root, data) {
        if(root == null) {
            return root;
        }
        else if(data < root.data) {
            root.left = this.deleterecursive(root.left, data);
        }
        else if(data > root.data) {
            root.right = this.deleterecursive(root.right, data);
        }
        else {
            //Data to be deleted is found

            //Case 1 - node to delete is leaf
            if(root.left == null && root.right == null) {
                root = null;
            }
            //Case 2 - single child
            else if(root.left == null) {
                root = root.right;
            }
            else if(root.right == null) {
                root = root.left;
            }
            //Case 3 - both children exist
            // - swap with right subtree minimum
            // - delete right subtree minimum
            else {
                let node = this.treeminimum(root.right);
                root.data = node.data;
                root.right = this.deleterecursive(root.right, node.data);
            }
        }
        return root;
    }

    delete(root, data) {
        if(root == null) {
            console.log("Root is null. cannot delete.");
            return null;
        }
        let nodeToBeDeleted = root;
        let parent = null, isLeft = false;

        while(nodeToBeDeleted != null && nodeToBeDeleted.data != data) {
            parent = nodeToBeDeleted;
            if(data < nodeToBeDeleted.data) {
                nodeToBeDeleted = nodeToBeDeleted.left;
                isLeft = true;
            }
            else {
                nodeToBeDeleted = nodeToBeDeleted.right;
                isLeft = false;
            }
        }
        if(nodeToBeDeleted == null) {
            console.log("Data to be deleted not found in tree");
            return root;
        }

        //Data to be deleted is found

        //Case 1 - node to delete is leaf
        if(nodeToBeDeleted.left == null && nodeToBeDeleted.right == null) {
            if(isLeft) {
                parent.left = null;
            }
            else {
                parent.right = null;
            }
        }
        //Case 2 - single child
        else if(nodeToBeDeleted.left == null) {
            if(isLeft) {
                parent.left = nodeToBeDeleted.right;
            }
            else {
                parent.right = nodeToBeDeleted.right;
            }
        }
        else if(nodeToBeDeleted.right == null) {
            if(isLeft) {
                parent.left = nodeToBeDeleted.left;
            }
            else {
                parent.right = nodeToBeDeleted.left;
            }
        }
        //Case 3 - both children exist
        // - swap with right subtree minimum
        // - delete right subtree minimum
        else {
            let rightSubtreeMinimum = nodeToBeDeleted.right;
            let rightSubtreeMinimumParent = null;
            while(rightSubtreeMinimum.left != null) {
                rightSubtreeMinimumParent = rightSubtreeMinimum;
                rightSubtreeMinimum = rightSubtreeMinimum.left;
            }

            nodeToBeDeleted.data = rightSubtreeMinimum.data;
            //If rightSubtreeMinimumParent is null
            if(rightSubtreeMinimumParent == null) {
                nodeToBeDeleted.right = null;
            }
            //right subtree minimum is always a left child with no left child of its own
            //deletion => parent.left = node.right
            else {
                rightSubtreeMinimumParent.left = rightSubtreeMinimum.right;
            }
        }
        return root;
    }
}

module.exports = BinarySearchTree;
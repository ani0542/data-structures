function getLinkedListLengthIterative(head) {

    if(head==null) {
        return 0;
    }
    let len = 1;
    let temp = head;
    while(temp.next!=null) {
        temp=temp.next;
        len++;
    }
    return len;
}

function getLinkedListLengthRecursive(head) {

    if(head==null) {
        return 0;
    }
    else {
        return 1 + getLinkedListLengthRecursive(head.next);
    }
}

function runTest() {
    let LinkedList = require('./linkedlist.js');
    let ArrayGenerator = require('../Utilities/arrayGenerator.js');

    let ll = new LinkedList(ArrayGenerator.generateArray(0));
    console.log("Iterative length = " + getLinkedListLengthIterative(ll.head));
    console.log("Recursive length = " + getLinkedListLengthRecursive(ll.head));
}

runTest();
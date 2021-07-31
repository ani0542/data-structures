/*
* Given two linked lists. Find if they are identical
*/

function isidentical(head1, head2) {
    if(head1 == null && head2 == null) {
        return true;
    }
    if(head1 == null || head2 == null) {
        return false;
    }
    let temp1=head1, temp2=head2;

    while(temp1 != null || temp2 != null) {
        if(temp1 == null || temp2 == null) {
            return false;
        }
        if(temp1.data != temp2.data) {
            return false;
        }
        temp1 = temp1.next;
        temp2 = temp2.next;
    }
    return true;
}

function isidenticalrecursive(head1, head2) {
    if(head1 == null && head2 == null) {
        return true;
    }
    if(head1 == null || head2 == null) {
        return false;
    }
    return head1.data==head2.data && isidenticalrecursive(head1.next, head2.next);
}

function runTest() {
    let LinkedList = require('./linkedlist.js');
    let ArrayGenerator = require('../Utilities/arrayGenerator.js');

    // let ll1 = new LinkedList(ArrayGenerator.generateArray(2));
    // let ll2 = new LinkedList(ArrayGenerator.generateArray(2));
    let ll1 = new LinkedList([1,2]);
    let ll2 = new LinkedList([1,2,3,4]);
    console.log("isIdentical iterative: " + isidentical(ll1.head, ll2.head));
    console.log("isIdentical recursive: " + isidenticalrecursive(ll1.head, ll2.head));
}

runTest();
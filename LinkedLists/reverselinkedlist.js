LinkedList = require('./linkedlist.js');

function reverseLinkedListIterative(head) {

    if(head == null || head.next == null) {
        return head;
    }

    let temp1 = head;
    let temp2 = head.next;
    let temp3 = head.next;
    temp1.next = null;
    while(temp3 != null) {
        temp3 = temp3.next;
        temp2.next = temp1;
        temp1 = temp2;
        temp2 = temp3;
    }
    head = temp1;
    return head;
}

function reverseLinkedListRecursive(head) {

    if(head == null || head.next == null){
        return head;
    }

    let newHead = reverseLinkedListRecursive(head.next);
    let temp = newHead;
    while(temp.next != null) {
        temp = temp.next
    }
    temp.next = head;
    head.next = null;
    head = newHead;

    return head;
}

function reverseUseNewList(head) {

    if(head == null || head.next == null){
        return head;
    }

    let newll = new LinkedList();
    let temp = head;
    while(temp != null) {
        newll.head = newll.addAtBeginining(newll.head, temp.data);
        temp = temp.next;
    }
    return newll.head;
}

function runTest() {
    LinkedList = require('./linkedlist.js');
    let ArrayGenerator = require('../Utilities/arrayGenerator.js');

    let ll = new LinkedList(ArrayGenerator.generateArray(4));
    ll.head = reverseLinkedListIterative(ll.head)
    console.log("ReverseLinkedListIterative :");
    ll.printList(ll.head);

    ll.head = reverseLinkedListRecursive(ll.head)
    console.log("ReverseLinkedListRecursive :");
    ll.printList(ll.head);

    ll.head = reverseUseNewList(ll.head)
    console.log("reverseUseNewList :");
    ll.printList(ll.head);
}

runTest();
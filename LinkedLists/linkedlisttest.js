function runTest() {
    let ArrayGenerator = require('../Utilities/arrayGenerator.js');
    let LinkedList = require('./linkedlist.js');
  
    //Initialize LinkedList with random array
    let ll = new LinkedList();
    let dataArray = ArrayGenerator.generateArray(5, {min:0, max:10})
    /* Test cases */
    console.log("=====LinkedList Test case output=====");
    console.log();
    console.log("Input data : "+ dataArray);
    dataArray.forEach(value => {ll.head = ll.addAtEnd(ll.head, value)});
    console.log("** Created LinkedList **");
    ll.printList(ll.head);
  
    // addAtEnd
    console.log("** addAtEnd **");
    console.log("Adding data 11");
    ll.head = ll.addAtEnd(ll.head, 11);
    ll.printList(ll.head);
  
    // addAtBeginining
    console.log("** addAtBeginining **");
    console.log("Adding data 21");
    ll.head = ll.addAtBeginining(ll.head, 21);
    ll.printList(ll.head);
  
    // addAtN
    console.log("** addAtN **");
    console.log("Adding data 31 at position 2");
    ll.head = ll.addAtN(ll.head, 31, 2);
    ll.printList(ll.head);
  
    // deleteAtEnd
    console.log("** deleteAtEnd **");
    ll.head = ll.deleteAtEnd(ll.head);
    ll.printList(ll.head);
  
    // deleteAtBegining
    console.log("** deleteAtBegining **");
    ll.head = ll.deleteAtBegining(ll.head);
    ll.printList(ll.head);
  
    // deleteAtN
    console.log("** deleteAtN **");
    console.log("Deteting at position 2");
    ll.head = ll.deleteAtN(ll.head, 2);
    ll.printList(ll.head);
  }
  
  runTest();
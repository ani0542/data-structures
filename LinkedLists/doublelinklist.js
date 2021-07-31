class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedlist {

  constructor(arr) {
    this.head = null;

    //Create a list with elemets in params array

    for(let i=0;i<arr.length; i++) {
      this.head = this.addAtEnd(this.head, arr[i]);
    }
    this.printList(this.head);
  }

  printList(head) {
    if(head === null){
      console.log("Head is null");
      return;
    }

    var printNode=head;
    var printStr=printNode.data+"<=>";

    while(printNode.next!=null){
      printNode=printNode.next;
      printStr+=printNode.data+"<=>";
    }
    console.log(printStr.substr(0,printStr.length-3));
  }

  addAtEnd(head, data) {
    let node = new Node(data);

    if(head == null) {
      head = node;
    }
    else {
      let temp = head;
      while(temp.next != null) {
        temp = temp.next;
      }
      temp.next = node;
      node.prev = temp;
    }
    return head;
  }

  addAtBeginining(head, data) {
    let node = new Node(data);

    if(head == null) {
      head = node;
    }
    else {
      node.next = head;
      head.prev = node;
      head = node;
    }
    return head;
  }

  addAtN(head, data, n) {
    let node = new Node(data);

    if(n<1) {
      console.log("Invalid value for n: "+n);
      return head;
    }

    if(n == 1) {
      if(head == null) {
        head = node;
      }
      else {
        node.next = head;
        head.prev = node;
        head = node;
      }
    }
    else {
      if(head == null) {
        console.log("Head is null. Cannot insert to position "+n);
      }
      else {
        let temp = head;
        let ctr = 2;
        while(temp.next != null && ctr<n) {
          temp = temp.next;
          ctr++;
        }
        if(ctr == n){
          if(temp.next != null) {
            temp.next.prev = node;
          }
          node.next = temp.next;
          node.prev = temp;
          temp.next = node;
        }
        else {
          console.log("LinkedList does not have position "+n+". LinkedList length "+(ctr-1));
        }
      }
    }
    return head;
  }
}

module.exports = DoubleLinkedlist;

function runTest() {
  let ArrayGenerator = require('../Utilities/arrayGenerator.js');

  //Initialize LinkedList with random array
  let dll = new DoubleLinkedlist(ArrayGenerator.generateArray(0));

  /* Test cases */
  console.log("=====Test case output=====");
  console.log();

  // addAtBeginining
  console.log("** addAtBeginining **");
  dll.head = dll.addAtBeginining(dll.head, 100);
  dll.printList(dll.head);

  // addAtEnd
  console.log("** addAtEnd **");
  dll.head = dll.addAtEnd(dll.head, -1);
  dll.printList(dll.head);

  // addAtN
  console.log("** addAtN **");
  dll.head = dll.addAtN(dll.head, 10, 1);
  dll.printList(dll.head);
}

runTest();

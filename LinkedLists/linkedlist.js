class Node {
  constructor(data) {
    this.data = data;
    this.next = null
  }
}

class LinkedList {

  constructor() {
    this.head = null;
  }

  printList(head) {
    if(head === null){
      console.log("Head is null");
      return;
    }

    let printNode=head;
    let printStr="";

    while(printNode.next != null){
      printStr+=printNode.data + " -> ";
      printNode=printNode.next;
    }
    printStr+=printNode.data;
    console.log(printStr);
  }

  addAtEnd(head, value) {
    let node = new Node(value);
    if(head === null){
      head=node;
    }
    else{
      let temp = head;
      while(temp.next != null) {
        temp = temp.next;
      }
      temp.next = node;
    }
    return head;
  }

  addAtBeginining(head, value) {
    let node = new Node(value);
    if(head==null){
      head=node;
    }
    else{
      node.next=head;
      head=node;
    }
    return head;
  }

  addAtN(head, value, n) {
    let node = new Node(value);

    if(n<1){
      console.log("n must be greater than 1 ");
      return head;
    }

    if(n==1) {
      node.next = head;
      head = node;
      return head;
    }

    if(head==null) {
      console.log("Head is null. cannot insert at position "+n);
      return head;
    }

    let temp=head;
    let ctr=2;

    while(temp.next!=null && ctr<n) {
      ctr++;
      temp=temp.next;
    }
    if(ctr==n) {
      node.next=temp.next;
      temp.next=node;
    }
    else{
      console.log("LinkedList does not have position "+n+". LinkedList length "+(ctr-1));
    }

    return head;
  }

  deleteAtEnd(head) {
    if(head==null){
      console.log("Head is null");
    }
    else if(head.next==null){
      head=null;
    }
    else{
      let temp = head;
      while(temp.next.next != null) {
        temp = temp.next;
      }
      temp.next = null;
    }
    return head;
  }

  deleteAtBegining(head) {
    if(head==null){
      console.log("Head is null");
    }
    else if(head.next==null){
      head=null;
    }
    else{
      head=head.next;
    }
    return head;
  }

  deleteAtN(head, n) {
    if(n<1){
      console.log("Invalid value for n:"+n);
    }
    else if(head==null){
      console.log("Head is null");
    }
    else if(n==1){
      head=head.next;
    }
    else{
      let ctr=1 ;
      let temp1=head;
      while(ctr<n-1 && temp1.next!=null){
        ctr++;
        temp1=temp1.next;
      }
      if(temp1.next==null) {
        console.log("LinkedList does not have position "+n+". LinkedList length "+ctr);
      }
      else {
        temp1.next=temp1.next.next;
      }
    }
    return head;
  }
}

module.exports = LinkedList;
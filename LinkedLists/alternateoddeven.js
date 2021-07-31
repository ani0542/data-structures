/*
* Given linkedlist, re-arrange such that the nodes are alternate odd and even
*/

function oddeven(head)
{
    if(head==null) {
        console.log("Head is null");
        return -1;
    }
    if(head.next==null) {
        return head;
    }

    let odd, even, temp=head.next;
    if(head.data%2 == 0) {
        even=head;
        even.next=null;
    }
    else {
        odd=head;
        odd.next=null;
    }
    while(temp.next != null) {
        if(temp.data%2 == 0) {
            even.next=temp;
            even=even.next;
            temp=temp.next;
            even.next=null;
        }
        else {
            odd.next=temp;
            even=even.next;
            temp=temp.next;
            even.next=null;
        }
    }
}
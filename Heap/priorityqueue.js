class PQElement {
  constructor(priority, value) {
    this.priority = priority;
    this.value = value;
  }
}

class PriorityQueue {

  constructor(type) {
    this.arr = [];
    this.priority=0;
    this.type = type;
  }

  getParent(n) {
    if(n<=0 || n>this.arr.length) {
      return -1;
    }
    return Math.floor((n-1)/2);
  }

  getLeftChild(n) {
    if(n<0 || n>this.arr.length) {
      return -1;
    }
    const leftChild = 2*n+1;

    if(!this.arr[leftChild]) {
      return -1;
    }
    return leftChild;
  }

  getRightChild(n) {
    if(n<0 || n>this.arr.length) {
      return -1;
    }
    const rightChild = 2*n+2;

    if(!this.arr[rightChild]) {
      return -1;
    }
    return rightChild;
  }

  swap(a,b) {
    let temp=this.arr[a];
    this.arr[a]=this.arr[b];
    this.arr[b]=temp;
  }

  upwardHeapify(n) {
    if(!this.arr[n]) {
      return;
    }
    const parent = this.getParent(n);

    if((this.type==='max' && this.arr[parent] && this.arr[parent].priority<this.arr[n].priority) ||
      (this.type==='min' && this.arr[parent] && this.arr[parent].priority>this.arr[n].priority))
    {
      this.swap(parent,n);
      this.upwardHeapify(parent);
    }
  }

  getMaxChild(leftChild, rightChild) {
    if(!this.arr[leftChild] && !this.arr[rightChild]) {
      return -1;
    }
    if(this.arr[leftChild] && !this.arr[rightChild]) {
      return leftChild;
    }
    if(!this.arr[leftChild] && this.arr[rightChild]) {
      return rightChild;
    }
    return this.arr[leftChild].priority>this.arr[rightChild].priority ? leftChild : rightChild;
  }

  getMinChild(leftChild, rightChild) {
    if(!this.arr[leftChild] && !this.arr[rightChild]) {
      return -1;
    }
    if(this.arr[leftChild] && !this.arr[rightChild]) {
      return leftChild;
    }
    if(!this.arr[leftChild] && this.arr[rightChild]) {
      return rightChild;
    }
    return this.arr[leftChild].priority<this.arr[rightChild].priority ? leftChild : rightChild;
  }

  downwardHeapify(n) {
    //heapify not required for leaf nodes
    if(n >= this.getParent(this.arr.length-1)+1) {
      return;
    }
    const leftChild = this.getLeftChild(n);
    const rightChild = this.getRightChild(n);

    if(this.type==='max') {
      let maxChild= this.getMaxChild(leftChild, rightChild);
      if(this.arr[n].priority<this.arr[maxChild].priority) {
        this.swap(maxChild, n);
        this.downwardHeapify(maxChild);
      }
    }
    if(this.type==='min') {
      let minChild= this.getMinChild(leftChild, rightChild);

      if(this.arr[n].priority>this.arr[minChild].priority) {
        this.swap(minChild, n);
        this.downwardHeapify(minChild);
      }
    }
  }

  push(value) {
    if(this.type==='min') {
      this.priority--;
    }
    if(this.type==='max') {
      this.priority++;
    }
    const len = this.arr.length;

    this.arr[len] = new PQElement(this.priority, value);
    this.upwardHeapify(len);
  }

  pop() {
    if(this.type==='min') {
      this.priority++;
    }
    if(this.type==='max') {
      this.priority--;
    }

    const len = this.arr.length;
    const deletedElem = this.arr[0];
    this.arr[0]=this.arr[len-1];
    this.arr.pop();

    this.downwardHeapify(0);
    return deletedElem.value;
  }

  enqueue(value) {
    if(this.type==='min') {
      this.priority++;
    }
    if(this.type==='max') {
      this.priority--;
    }
    const len = this.arr.length;
    this.arr[len]=new PQElement(this.priority, value);
    this.upwardHeapify(len);
  }

  dequeue() {
    if(this.type==='min') {
      this.priority--;
    }
    if(this.type==='max') {
      this.priority++;
    }
    const deletedElem = this.arr[0];
    this.arr[0]=this.arr[this.arr.length-1];
    this.arr.pop();
    this.downwardHeapify(0);

    return deletedElem.value;
  }

  printPriorityQueue() {
    console.log(this.arr);
  }
}

// const priorityQueueStack = new PriorityQueue('max');
// priorityQueueStack.push(12);
// priorityQueueStack.push(14);
// priorityQueueStack.push(31);
// priorityQueueStack.push(17);
// priorityQueueStack.printPriorityQueue();
// console.log(priorityQueueStack.pop());
// console.log(priorityQueueStack.pop());
// console.log(priorityQueueStack.pop());
// priorityQueueStack.printPriorityQueue();

const priorityQueueQueue = new PriorityQueue('min');
priorityQueueQueue.enqueue(12);
priorityQueueQueue.enqueue(13);
priorityQueueQueue.enqueue(14);
priorityQueueQueue.enqueue(10);
priorityQueueQueue.printPriorityQueue();
console.log(priorityQueueQueue.dequeue());
console.log(priorityQueueQueue.dequeue());
priorityQueueQueue.printPriorityQueue();

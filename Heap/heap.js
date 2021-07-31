class Heap {

  constructor(type) {
    this.type = type;
    this.arr = [];
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

    if((this.type==='max' && this.arr[parent]<this.arr[n]) ||
      (this.type==='min' && this.arr[parent]>this.arr[n]))
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
    return this.arr[leftChild]>this.arr[rightChild] ? leftChild : rightChild;
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
    return this.arr[leftChild]<this.arr[rightChild] ? leftChild : rightChild;
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

      if(this.arr[n]<this.arr[maxChild]) {
        this.swap(maxChild, n);
        this.downwardHeapify(maxChild);
      }
    }
    if(this.type==='min') {
      let minChild= this.getMinChild(leftChild, rightChild);

      if(this.arr[n]>this.arr[minChild]) {
        this.swap(minChild, n);
        this.downwardHeapify(minChild);
      }
    }
  }

  insert(value) {
    this.arr.push(value);
    this.upwardHeapify(this.arr.length-1);
  }

  delete() {
    // 1. replace root with last element of last level
    // 2. downward heapify
    const deletedItem = this.arr[0];
    this.arr[0] = this.arr[this.arr.length-1];
    this.arr.pop();
    this.downwardHeapify(0);
    return deletedItem;
  }

  buildHeap(array) {
    this.arr = this.arr.concat(array);
    //downwardHeapify starting from parent of last leaf node to root
    let node=Math.floor((this.arr.length-2)/2);
    while(node>=0) {
      this.downwardHeapify(node);
      node--;
    }
  }

  printHeap() {
    console.log(this.arr);
  }

  createHeap() {
    const initHeap = [12,14,31,3,8,4,3,1,10,19,16,1,2,5,71,1];
    for(let i=0;i<initHeap.length;i++) {
      this.insert(initHeap[i]);
    }
    this.printHeap();
  }

  heapsort() {
    const arr=[];
    const heaplength=this.arr.length-1;
    for(let i=0; i<=heaplength; i++) {
      if(this.type==='min') {
        arr.push(this.delete());
      }
      if(this.type==='max') {
        arr[heaplength-i] = this.delete();
      }
    }
    return arr;
  }

  maxinminheap() {
    // max element in min-heap shall be a leaf
    // start iterating leaves to find max
    if(this.arr.length<=0) {
      console.log("Empty heap");
      return -1;
    }
    const len=this.arr.length;
    //parent of last leaf+1
    const firstleaf=this.getParent(len-1)+1;
    let max=firstleaf;

    for(let i=firstleaf; i<len; i++) {
      if(max<this.arr[i]) {
        max=i;
      }
    }
    return this.arr[max];
  }
}

// const maxHeap = new Heap('max');
// maxHeap.createHeap();
// maxHeap.buildHeap([12,14,31,3,8,4,3,1,10,1 9]);
// maxHeap.buildHeap([16,1,2,5,71,1]);
// maxHeap.printHeap();
// console.log(maxHeap.heapsort());
// maxHeap.delete();
// maxHeap.printHeap();

const minHeap = new Heap('min');
// minHeap.createHeap();
minHeap.buildHeap([12,14,31,3,8,4,3,1,10,19,16,1,2,5,71,1]);
minHeap.printHeap();
// minHeap.delete();
// minHeap.printHeap();
// console.log(minHeap.heapsort());
console.log(minHeap.maxinminheap());

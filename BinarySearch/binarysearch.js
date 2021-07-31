class binarysearch {

  constructor(arr) {
    this.arr = arr;
  }

  bsearchiterative(searchVal) {
    let lower = 0;
    let upper = this.arr.length-1;

    while(lower <= upper) {
      let mid = Math.floor(lower + (upper - lower)/2);

      if(searchVal == this.arr[mid]) {
        return mid;
      }
      else if(searchVal < this.arr[mid]) {
        upper = mid - 1;
      }
      else {
        lower = mid + 1;
      }
    }
    return -1;
  }

  bsearchrecursive(searchVal, lower=0, upper=this.arr.length-1) {
    let mid = Math.floor(lower + (upper - lower)/2);
    console.log(mid, lower, upper);
    if(searchVal == this.arr[mid]) {
      return mid;
    }
    else if (lower > upper) {
      return -1;
    }
    if(searchVal < this.arr[mid]) {
      return this.bsearchrecursive(searchVal, lower, mid - 1);
    }
    else {
      return this.bsearchrecursive(searchVal, mid + 1, upper);
    }
  }
}

let obj = new binarysearch([-1,4,6,9,12,28]);
console.log(obj.bsearchiterative(9));
//console.log(obj.bsearchiterative(10));
console.log(obj.bsearchrecursive(9));

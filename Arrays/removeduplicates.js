/*
* Given sorted array remove duplicate elements
*/

function removeduplicates(arr) {
    if(arr == null || arr.length == 0) {
        console.log("Given array is null/empty");
        return -1;
    }
    if(arr.length==1) {
        return arr;
    }

    let len = arr.length;
    let k=0;
    for(let i=1; i<len; i++) {
        if(arr[k] != arr[i]) {
            arr[++k] = arr[i];
        }
    }
    for(let i=k+1; i<len; i++) {
        arr[i] = -1;
    }
    return arr;
}

function runTest() {
    let ArrayGenerator = require('../Utilities/arrayGenerator.js');
    let inputArr = ArrayGenerator.generateArray(10, {sorted:true, min:0, max:9});
    console.log(inputArr);
    let outputArr = removeduplicates(inputArr);
    console.log(outputArr);
    // console.log(countsort([0,4,1,0,3,3,5]));
}

runTest();
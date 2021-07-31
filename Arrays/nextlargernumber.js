/*
* Given array of digits representing a number.
* By permutating the digits give next larger number

* Steps:
1. Swap last digit with any smaller digit available (If not available, given number is already largest)
2. Count sort the remaining least significant digits
*/

function nextlargernumber(arr) {
    if(arr == null) {
        console.log("Array is null");
        return -1;
    }
    let len = arr.length;

    if(len == 1) {
        console.log("Number has 1 digit. Permutation not possible.");
        return -1;
    }

    //start from end of array. swap with next smaller digit
    let swapPos = len-2;
    while(swapPos>=0) {
        if(arr[len-1]> arr[swapPos]) {
            let temp = arr[len-1];
            arr[len-1] = arr[swapPos];
            arr[swapPos] = temp;
            break;
        }
        else{
            swapPos--;
        }
    }
    if(swapPos==-1){
        console.log("Larger number not possible for " + arr);
        return -1;
    }

    //count sort from swapPos+1 to end of array
    let countArr = new Array(10);
    for(let j=swapPos+1; j<len; j++) {
        if(countArr[arr[j]] != undefined) {
            countArr[arr[j]] += 1;
        }
        else { 
            countArr[arr[j]] = 1;
        }
    }

    let sum=0;
    for(let j=0; j<10; j++) {
        if(countArr[j] == undefined) {
            countArr[j] = sum;
        }
        else {
            sum += countArr[j];
            countArr[j] = sum;
        }
    }

    let outputArrLen = len-(swapPos+1);
    let outputArr = new Array(outputArrLen);
    for(let j=0; j<outputArrLen; j++) {
        let elem = arr[j+swapPos+1];
        let pos = countArr[elem];
        outputArr[pos-1] = elem;
        countArr[elem] = --pos;
    }

    //populate original aaray with sorted array
    for(let j=0; j<outputArrLen; j++) {
        arr[j+swapPos+1] = outputArr[j];
    }

    return arr;
}

function runTest() {
    let ArrayGenerator = require('../Utilities/arrayGenerator.js');
    // let inputArr = ArrayGenerator.generateArray(5, {min: 0, max:9});
    // console.log(inputArr);
    // console.log(nextlargernumber(inputArr));
    console.log(nextlargernumber([9,1,9,8]));
}

runTest();
/*
* Count sort is performed in O(n) using extra space
* This works when we know that elements to be sorted are within a given range
* For example - 
* - digits in a number :  range 0-9
* - characters in a word : range a-z
*
* Steps :
1. Create a fixed size countArr to hold the count for each digit/character
2. Iterate over countArr to store cumulative count sum
   The value in countArr shall now be the position of elem in outputArr
3. Iterate over original array
   Lookup elem's position in countArr and write to new outputArr.
   Decrement countArr value
*/

function countsort(arr) {
    if(arr == null || arr.length == 0) {
        console.log("Array is null/empty");
        return [];
    }
    if(arr.length == 1) {
        return arr;
    }

    let countArr = new Array(10);
    let len = arr.length;

    //Populate countArr array with count of digits
    for(let i=0; i<len; i++) {
        if(countArr[arr[i]] != undefined) {
            countArr[arr[i]] += 1;
        }
        else {
            countArr[arr[i]] = 1;
        }
    }

    //Populate countArr array with cumulative counts
    let sum = 0;
    for(let i=0; i<10; i++) {
        if(countArr[i] == undefined) {
            countArr[i] = sum;
        }
        else {
            sum += countArr[i];
            countArr[i] = sum;
        }
    }

    //Generate sorted array
    let outputArr = new Array(len);
    for(let i=0; i<len; i++) {
        let elem = arr[i];
        let pos = countArr[elem];
        outputArr[pos-1] = elem;
        countArr[elem] = --pos;
    }

    return outputArr;
}

function runTest() {
    let ArrayGenerator = require('../Utilities/arrayGenerator.js');
    let inputArr = ArrayGenerator.generateArray(5, {min: 0, max:9});
    let outputArr = countsort(inputArr);
    console.log(inputArr);
    console.log(outputArr);
    // console.log(countsort([0,4,1,0,3,3,5]));
}

runTest();

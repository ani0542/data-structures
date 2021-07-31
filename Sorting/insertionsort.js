/*
* Insertion sort O(n2)
* Works best for small sets
*
* Steps :
* Iterate over elements
* Keep left array always sorted
*/

function insertionsort(arr)
{
    if(arr == null || arr.length == 0) {
        console.log("Array is null/empty");
        return -1;
    }
    if(arr.length == 1) {
        return arr;
    }

    let len=arr.length;
    for(let i=1; i<len; i++) {
        let curr=arr[i];
        let j=i-1;
        for(j; j>=0; j--) {
            if(arr[j]>curr) {
                arr[j+1] = arr[j];
            }
            else {
                break;
            }
        }
        arr[j+1]=curr;
    }
    return arr;
}

function runTest() {
    let ArrayGenerator = require('../Utilities/arrayGenerator.js');
    let inputArr = ArrayGenerator.generateArray(10);
    console.log(inputArr);
    let outputArr = insertionsort(inputArr);
    console.log(outputArr);
}

runTest();
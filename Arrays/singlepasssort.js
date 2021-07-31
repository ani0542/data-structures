/*
* Given array containing only  -
* [0,1]s. Sort in single pass
* [0,1,2]s. Sort in single pass
*/

function sort01s(arr) {
    if(arr == null || arr.length == 0) {
        console.log("Array is null/empty");
        return -1;
    }
    if(arr.length == 1) {
        return arr;
    }

    let ctr1=0; ctr2=arr.length-1;
    while(ctr1<ctr2) {
        if(arr[ctr1] == 0) {
            ctr1++;
        }
        if(arr[ctr2] == 1) {
            ctr2--;
        }
        if(arr[ctr1]==1 && arr[ctr2]==0) {
            arr[ctr1++] = 0;
            arr[ctr2--] = 1;
        }
    }
    return arr;
}

function sort012s(arr) {
    if(arr == null || arr.length == 0) {
        console.log("Array is null/empty");
        return -1;
    }
    if(arr.length == 1) {
        return arr;
    }

    let s=0, m=0, e=arr.length-1;
    while(m<=e) {
        if(arr[m]==2) {
            arr[m] = arr[e];
            arr[e] = 2;
            e--;
        }
        else if(arr[m]==1) {
            m++;
        }
        else if(arr[m]==0) {
            arr[m] = arr[s];
            arr[s] = 0;
            s++;m++;
        }
    }
    return arr;
}

function runTest() {
    let ArrayGenerator = require('../Utilities/arrayGenerator.js');
    // let inputArr = ArrayGenerator.generateArray(10, {min:0, max:1});
    // console.log(inputArr);
    // let outputArr = sort01s(inputArr);
    // console.log(outputArr);

    let inputArr = ArrayGenerator.generateArray(4, {min:0, max:2});
    console.log(inputArr);
    let outputArr = sort012s(inputArr);
    // let outputArr = sort012s([2,2,1,0]);
    console.log(outputArr);
}

runTest();

/*
[ 2210 ]

s m e  a
0 0 3  2210
0 1 2  0212
0 2 1  0122
0 3 0  0212

*/
/*
Find index and length of subarray which has maximum number of zeros
If multiple cases present, consider first occurrence.
[1,0,0,0,1,0,0,0,0]
Output ->
length - 4
index - 5
*/

function maxzerosubarray(arr) {
    console.log(arr);
    if(arr == null) {
        return "Array is NULL";
    }

    let zeroctr=0, maxctr=0;
    let startindex=0, maxzerostartindex=0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] == 0) {
            zeroctr++;
        }
        else {
            if(zeroctr > maxctr) {
                maxctr = zeroctr;
                maxzerostartindex = startindex;
            }
            //reset counters
            zeroctr = 0;
            startindex = i+1;
        }
    }
    //After complete iteration check again
    if(zeroctr > maxctr) {
        maxctr = zeroctr;
        maxzerostartindex = startindex;
    }

    console.log("subarray which has maximum number of zeros");
    console.log("length="+maxctr);
    console.log("index="+maxzerostartindex);
}

function runTest() {
    let ArrayGenerator = require('../Utilities/arrayGenerator.js');
    // maxzerosubarray([1,0,0,1,1,0,0,0]);
    // maxzerosubarray([0,0,0]);
    // maxzerosubarray([0,0,0,1,0]);
    maxzerosubarray([0,0,1,0,1,0,0,0]);
}

runTest();
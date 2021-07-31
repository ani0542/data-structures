/*
Find max element in array where array stops increasing and starts decreasing
[1,2,3,4,5,10,8,7,6]
Output : 10
*/

function peak(arr, start, end)
{
    if(arr == null) {
        console.log("Array is null");
        return -1;
    }
    else if(start == end) {
        return arr[start];
    }
    else if(end == start + 1) {
        return arr[start]>arr[end] ? arr[start] : arr[end];
    }
    else {
        let mid = Math.floor((start+end)/2);
        if((arr[mid-1] < arr[mid] && arr[mid] > arr[mid+1])
        || (mid-1 < 0 && arr[mid] > arr[mid+1])
        || (mid > arr.length-1 && arr[mid-1] < arr[mid])) {
            return arr[mid];
        }
        else {
            if(arr[mid] < arr[mid+1] && arr[mid] > arr[mid-1]) {
                start = mid+1;
            }
            else {
                end = mid-1;
            }
            return peak(arr, start, end);
        }
    }
}

function runTest() {
    let ArrayGenerator = require('../Utilities/arrayGenerator.js');
    console.log(peak([1,2,3,4], 0, 3));
    console.log(peak([1,2,3,4,5,10,8,7,6], 0, 8));
}

runTest();
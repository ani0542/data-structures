/**
 * Given a sorted array, circular rotate the array k times
 * 
 * Example :
 * Array => [1, 2, 3, 4, 5, 6, 7]
 * Rotate :
 * k=1 => [7, 1, 2, 3, 4, 5, 6]
 * k=2 => [6, 7, 1, 2, 3, 4, 5]
 * k=3 => [5, 6, 7, 1, 2, 3, 4]
 * 
 * Questions :
 * 1. Find number of rotations
 * Solution in O(log n)
 * 
 * 2. Rotate given sorted array k times
 * Solution in 3 * O(n/2)
 * 
 * 3. Search a key in rotated sorted array
 * Solution in O(log n)
 */

function findRotation(arr) {
    let start = 0, end = arr.length - 1;

    while(start <= end) {
        let mid = Math.floor((start + end)/2);
        if(arr[start] > arr[mid]) {
            end = mid - 1;
        }
        else if(arr[mid] > arr[end]) {
            start = mid + 1;
        }
        else {
            if(start !=0 && arr[start-1] > arr[start]) {
                return start;
            }
            else if(end != arr.length-1 && arr[end] > arr[end+1]) {
                return end+1;
            }
            else {
                return 0;
            }
        }
    }
    return -1;
}

function rotatektimes(arr, k) {
    if(k<0 || k>arr.length) {
        console.log("Invalid value for k");
        return;
    }
    //reverse complete array
    reverseArr(arr, 0, arr.length-1);

    //reverse 1st k characters
    reverseArr(arr, 0, k-1);

    //reverse remaining characters
    reverseArr(arr, k, arr.length-1);

    console.log(arr);
}

function reverseArr(arr, start, end) {
    let p=start, q=end;
    while(p<q) {
        let temp = arr[p];
        arr[p] = arr[q];
        arr[q] = temp;
        p++;
        q--;
    }
}

function runTest() {
    console.log();
    console.log("****** Number of rotations sorted array *******");
    console.log("Given array : [5, 6, 7, 1, 2, 3, 4]");
    console.log("Number of rotations : ");
    console.log(findRotation([5, 6, 7, 1]));
    console.log();
    console.log("****** Rotate array k times *******");
    console.log("Given array : [1, 2, 3, 4, 5, 6, 7]");
    console.log("Rotate 4 times : ");
    rotatektimes([1, 2, 3, 4, 5, 6, 7], 4);
}

runTest();
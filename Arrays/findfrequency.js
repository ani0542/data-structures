/**
 * Given a sorted array with repeated elements
 * Find the frequency of any given element
 * 
 * Example :
 * Array => 1, 2, 2, 3, 3, 3, 4, 4, 5, 6, 6, 6, 7
 * Given Key => 6
 * Output => 3
 */

 /**
 * Iterative implementation
 */
function findfrequency(arr, key) {
    let startIdx = findStartIndexOfKey(arr, key);
    let endIdx = findEndIndexOfKey(arr, key);

    if(endIdx == -1 || startIdx == -1) {
        return -1;
    }
    return endIdx - startIdx + 1;
}

function findStartIndexOfKey(arr, key) {
    let start = 0, end = arr.length - 1;
    while(start <= end) {
        let mid = Math.floor((start + end)/2);
        if(key < arr[mid]) {
            end = mid - 1;
        }
        else if(key > arr[mid]) {
            start = mid + 1;
        }
        // equal case
        else {
            if(mid == 0 || arr[mid-1] < arr[mid]) {
                return mid;
            }
            else {
                end = mid - 1;
            }
        }
    }
    return -1;
}

function findEndIndexOfKey(arr, key) {
    let start = 0, end = arr.length - 1;
    while(start <= end) {
        let mid = Math.floor((start + end)/2);
        if(key < arr[mid]) {
            end = mid - 1;
        }
        else if(key > arr[mid]) {
            start = mid + 1;
        }
        // equal case
        else {
            if(mid == arr.length - 1 || arr[mid] < arr[mid+1]) {
                return mid;
            }
            else {
                start = mid + 1;
            }
        }
    }
    return -1;
}

 /**
 * Recursive implementation
 */
function findfrequencyRecursive(arr, key) {
    let startIdx = findStartIndexOfKeyRecursive(arr, 0, arr.length-1, key);
    let endIdx = findEndIndexOfKeyRecursive(arr, 0, arr.length-1, key);

    if(endIdx == -1 || startIdx == -1) {
        return -1;
    }
    return endIdx - startIdx + 1;
}

function findStartIndexOfKeyRecursive(arr, start, end, key) {
    if(start > end) {
        return -1;
    }
    let mid = Math.floor((start + end)/2);
    if(key < arr[mid]) {
        return findStartIndexOfKeyRecursive(arr, start, mid-1, key);
    }
    else if(key > arr[mid]) {
        return findStartIndexOfKeyRecursive(arr, mid+1, end, key);
    }
    // equal case
    else {
        if(mid == 0 || arr[mid-1] < arr[mid]) {
            return mid;
        }
        else {
            return findStartIndexOfKeyRecursive(arr, start, mid-1, key);
        }
    }
}

function findEndIndexOfKeyRecursive(arr, start, end, key) {
    if(start > end) {
        return -1;
    }
    let mid = Math.floor((start + end)/2);
    if(key < arr[mid]) {
        return findEndIndexOfKeyRecursive(arr, start, mid-1, key);
    }
    else if(key > arr[mid]) {
        return findEndIndexOfKeyRecursive(arr, mid+1, end, key);
    }
    // equal case
    else {
        if(mid == arr.length - 1 || arr[mid] < arr[mid+1]) {
            return mid;
        }
        else {
            return findEndIndexOfKeyRecursive(arr, mid+1, end, key);
        }
    }
}

function runTest() {
    console.log();
    console.log("****** Frequency in sorted array *******");
    console.log("Given array : [1, 1, 2, 3, 3, 3, 4, 4, 5, 6, 6, 6, 7]");
    console.log("Frequency of 6 : ");
    console.log(findfrequency([1, 1, 2, 3, 3, 3, 4, 4, 5, 6, 6, 6, 7], 6));
    console.log();
    console.log("****** Frequency in sorted array (Recursively) *******");
    console.log("Given array : [1, 1, 2, 3, 3, 3, 4, 4, 5, 6, 6, 6, 7]");
    console.log("Frequency of 6 : ");
    console.log(findfrequencyRecursive([1, 1, 2, 3, 3, 3, 4, 4, 5, 6, 6, 6, 7], 6));
}

runTest();
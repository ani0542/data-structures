/*
* 1. Given two strings, check if anagram
* 2. Given array of strings, which ones are anagrams
*/

function isanagram(str1, str2) {
    if(str1 == null && str2 == null) {
        return true;
    }
    if(str1 == null || str2 == null) {
        return false;
    }

    let l1 = str1.length, l2 = str2.length;
    if(l1 != l2){
        return false;
    }
    if(l1 == 0) {
        return true;
    }

    let a=Array.from(str1), b=Array.from(str2);
    let countmap = {};

    for(let i=0; i<l1; i++) {
        //For each entry in a increment counter
        if(countmap[a[i]] == undefined) {
            countmap[a[i]] = 1;
        }
        else {
            countmap[a[i]] += 1;
        }
        //For each entry in b decrement counter
        if(countmap[b[i]] == undefined) {
            countmap[b[i]] = -1;
        }
        else {
            countmap[b[i]] -= 1;
        }
    }

    //If any non-zero count exists in countmap, return false
    for(let i=0; i<l1; i++) {
        if(countmap[a[i]] != 0) { 
            return false;
        }
    }
    return true;
}

function runTest() {
    console.log(isanagram("godolo","dogloo"));
}

runTest();
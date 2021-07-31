/*
* 1. Given string, check if palindrome
* 2. Given string, how many characters need to be changed to make palindrome
*/

function palindrome(str) {
    if(str == null || str.length == 0) {
        return "Given string is null/empty";
    }

    let arr = Array.from(str);
    let start = 0;
    let end = arr.length-1;

    while (start <= end) {
        if(arr[start] != arr[end]) {
            return "Not a palindrome";
        }
        else {
            start++;
            end--;
        }
    }
    return str + " is a palindrome";
}

function charactersForPalindrome(str) {
    if(str == null || str.length == 0) {
        console.log("Given string is null/empty");
        return -1;
    }

    let arr = Array.from(str);
    let start = 0;
    let end = arr.length-1;
    let count = 0;

    while (start <= end) {
        if(arr[start] != arr[end]) {
            count++;
        }
        start++;
        end--;
    }
    return count;
}

function runTest() {
    console.log(palindrome("xabcax"));
    console.log("to make palindrome : "+charactersForPalindrome("amit"));
}

runTest();
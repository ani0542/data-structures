function length(str) {
    if(str == null) {
        console.log("Given string is null");
        return -1;
    }
    let charArr = Array.from(str);
    return charArr.length;
}

function runTest() {
    console.log("** Length of string **");
    console.log("Given String : amit");
    console.log("Length : " + length("amit"));
}

runTest();
/**
 * Method to convert given string to all lowercase letters
 * A-Z -> 65-90
 * a-z -> 97-122
 * 
 * @param {Strinf} str Given string
 */
function tolowercase(str) {
    if(str == null) {
        console.log("Given string is null");
        return null;
    }

    let charArr = Array.from(str);
    let len = charArr.length;
    for(let i=0; i<len; i++) {
        let asciiVal = charArr[i].charCodeAt(0);
        if(asciiVal > 64 && asciiVal < 91) {
            charArr[i] = String.fromCharCode(asciiVal+32);
        }
    }
    return charArr.join("");
}

function runTest() {
    console.log("** String tolowercase **");
    console.log("Given String : amIT Saha");
    console.log("Return value : " + tolowercase("amIT Saha"));
}

runTest();
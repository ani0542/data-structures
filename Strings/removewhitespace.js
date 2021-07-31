function removewhitespace(str) {
    if(str == null) {
        console.log("Given string is null");
        return null;
    }

    let charArr = Array.from(str);
    let len = charArr.length;
    let gotNextWord = true;
    let j = 0;

    for(let i=0; i<len; i++) {
        if(charArr[i] == ' ') {
            gotNextWord = false;
        }
        else {
            gotNextWord = true;
        }
        if(gotNextWord) {
            charArr[j++] = charArr[i];
        }
    }
    for(let i=j; i<len; i++) {
        charArr[i] = ' ';
    }
    return charArr.join("");
}

function runTest() {
    console.log("** String  removewhitespace **");
    console.log("Given String : amIT Saha");
    console.log("Return value : s/" + removewhitespace("amIT Saha") + "/e");
    console.log("Given String : [.]amIT[.]Saha[.]");
    console.log("Return value : s/" + removewhitespace(" amIT Saha ") + "/e");
    console.log("Given String : amITSaha");
    console.log("Return value : s/" + removewhitespace("amITSaha") + "/e");
    console.log("Given String : [..]amIT[...]Saha[..]x");
    console.log("Return value : s/" + removewhitespace("  amIT   Saha  x") + "/e");
    console.log("Given String : [.]");
    console.log("Return value : s/" + removewhitespace(" ") + "/e");
}

runTest();
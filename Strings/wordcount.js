function wordcount(str) {
    if(str == null) {
        console.log("Given string is null");
        return null;
    }

    let charArr = Array.from(str);
    let len = charArr.length;
    let wordcount = 0;
    let gotwhitespace = true;

    for(let i=0; i<len; i++) {
        if(charArr[i] == ' ') {
            gotwhitespace = true;
        }
        else if(gotwhitespace) {
            wordcount++;
            gotwhitespace = false;
        }
    }
    return wordcount;
}

function runTest() {
    console.log("** String  wordcount **");
    console.log("Given String : amIT Saha");
    console.log("Return value : " + wordcount("amIT Saha"));
    console.log("Given String : [.]amIT[.]Saha[.]");
    console.log("Return value : " + wordcount(" amIT Saha "));
    console.log("Given String : amITSaha");
    console.log("Return value : " + wordcount("amITSaha"));
    console.log("Given String : [..]amIT[...]Saha[..]x");
    console.log("Return value : " + wordcount("  amIT   Saha  x"));
    console.log("Given String : [.]");
    console.log("Return value : " + wordcount(" "));
}

runTest();
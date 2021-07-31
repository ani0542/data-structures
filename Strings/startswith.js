function startswith(str, pattern) {
    if(str == null || pattern == null) {
        console.log("Given inputs are null");
        return -1;
    }
    if(pattern.length > str.length) {
        return false;
    }
    let len = pattern.length;
    for(let i=0; i<len; i++) {
        if (str[i] !== pattern[i]) {
            return false;
        }
    }
    return true;
}

function runTest() {
    console.log("** String startswith **");
    console.log("Given String : amit");
    console.log("Given startswith : am");
    console.log("Return value : " + startswith("amit", "am"));
    console.log("Given startswith : ax");
    console.log("Return value : " + startswith("amit", "ax"));
    console.log("Given startswith : amitx");
    console.log("Return value : " + startswith("amit", "amitx"));
}

runTest();
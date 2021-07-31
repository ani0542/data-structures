/**
 * Naive string matching algorithm uses brute force 
 * Compares PATTERN with all possible strings of size 'm' in TEXT
 * Complexity - O(n2)
 * 
 * @param {String} text 
 * @param {String} pattern 
 */
function naivestringmatching(text, pattern) {
    console.log("Looking for pattern '%s' in text '%s'", pattern, text);

    let match = 0;
    let T = Array.from(text), P = Array.from(pattern);
    let n = T.length, m = P.length;

    for(let i=0; i<n-m+1; i++) {
        let hasMatch = true;
        for(let j=0; j<m; j++) {
            if(P[j] != T[i+j]) {
                hasMatch = false;
            }
        }
        if(hasMatch) {
            match++;
            console.log("Match found at shift " + i);
        }
    }
    if(match == 0) {
        console.log("No match found");
    }
}


function runTest() {
    console.log();
    console.log("****** Naive string matching *******");
    naivestringmatching("abcabaabcabac","abaa");
}

runTest();
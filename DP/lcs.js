/**
 * Least Common Subsequence of two given strings
 * 
 * Example :
 * Given - ABCBDAB, BDCABA
 * LCS - BCBA, BDAB
 * 
 * @param {String} s1 
 * @param {String} s2 
 */

function lcs(s1, s2) {
    let x = Array.from(s1), y = Array.from(s2);
    let m = x.length, n = y.length;
    let c = [];

    for(let i=0; i<=m; i++) {
        c[i] = [];
        c[i][0] = 0;
    }
    for(let j=0; j<=n; j++) {
        c[0][j] = 0;
    }

    for(let i=1; i<=m; i++) {
        for(let j=1; j<=n; j++) {
            if(x[i] == y[j]) {
                c[i][j] = c[i-1][j-1] + 1;
            }
            else {
                c[i][j] = Math.max(c[i-1][j] ? c[i-1][j] : 0, c[i][j-1] ? c[i][j-1] : 0);
            }
        }
    }
    return c;
}

function printlcs(s1, s2, c) {
    let x = [0].concat(Array.from(s1)), y = [0].concat(Array.from(s2));
    let i = c.length-1, j = c[0].length-1;
    let ll = c[i][j];
    let lcs = [], k=ll;

    while(i>0 && j>0) {
        if(x[i] == y[j]) {
            lcs[k--] = x[i];
            i--;
            j--;
        }
        else {
            if(c[i][j-1] > c[i-1][j]) {
                j--;
            }
            else if(c[i][j-1] < c[i-1][j]) {
                i--;
            }
            else {
                if(x[i-1] == y[j]) {
                    i--;
                }
                if(x[i] == y[j-1]) {
                    j--;
                }
            }
        }
    }
    console.log(lcs.join(''));
}

function printlcstable(c) {
    for(let i=0; i<c.length; i++) {
        console.log(c[i]);
    }
}

function lcsrecursive(x, y, i, j, lcs) {
    if(i == 0 || j == 0) {
        console.log(lcs.join(''));
        return 0;
    }
    if(x[i] == y[j]) {
        lcs.push(x[i]);
        return 1;
    }
    else {
        return Math.max(lcsrecursive(x, y, i-1, j, lcs),
        lcsrecursive(x, y, i, j-1, lcs));
    }
}

function runTest() {
    /*
    *  LCS run with tabulization
    */
    // let t1 = Date.now();
    // let lcstable = lcs("ABCBDAB", "BDCABA");
    // console.log("Least Common Subsequence of : ABCBDAB, BDCABA");
    // printlcstable(lcstable);
    // printlcs("ABCBDAB", "BDCABA", lcstable);
    // let t2 = Date.now();
    // console.log("Time taken in ms = " + (t2-t1));

    /*
    * LCS run with Memoization
    */
   t1 = Date.now();
   let lcs = [];
   lcsrecursive(Array.from("ABCBDAB"), Array.from("BDCABA"), 6, 5, lcs);
   console.log(lcs.join(''));
   t2 = Date.now();
   console.log("Time taken in ms = " + (t2-t1));
}

runTest();
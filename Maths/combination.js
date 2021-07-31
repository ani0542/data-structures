/*
* nCr = n! / (n-r)!*r!
*
* Steps :
* 5C2 = 5*4*3*2*1 / 3*2*1 * 2*1
*     = 5*4 / 2*1
* greater of (n-r), r gets cancelled out with numerator
*/

function combination(n, r) {
    if(n<=0 || r<=0) {
        console.log("Invalid input. Both n & r must be positive integers.");
        return -1;
    }
    if(r>n) {
        console.log("Invalid input. r must always be <= n");
        return -1;
    }
    if(r==n) {
        return 1;
    }
    if(r==1) {
        return n;
    }
    let x = n-r > r ? n-r : r;
    let numerator=1, denominator=1;

    for(let i=n; i>x; i--) {
        numerator *= i;
        denominator *= n-i+1;
    }

    return numerator/denominator;
}



function runTest() {
    console.log(combination(6, 3));
    console.log(combination(2,1));
}

runTest();
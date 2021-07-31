/**
 * Fibonacci sequence is characterized by the fact that every number after the first two is 
 * the sum of the two preceding ones:[1][2]
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
 *
 * This problem can be solved by simple recursive code
 * However, as the size of n increases, this becomes quite expensive.
 * Time Complexity: T(n) = T(n-1) + T(n-2) which is exponential.
 * 
 * Finding nth Fibonacci number is a very good candidate for Dynamic Programming
 * as this makes a case for optimal subproblem
 */

 function fibonacci(n) {
    if(n==0 || n==1) {
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

function fibonacciMemoization(n, memo) {
    if(n==0 || n==1) {
        return 1;
    }
    if(!memo[n]) {
        memo[n] = fibonacciMemoization(n-1, memo) + fibonacciMemoization(n-2, memo);
    }
    return memo[n];
}

function fibonacciTabulization(n) {
    let table = {};
    table[0] = 1;
    table[1] = 1;

    for(let i=2; i<=n; i++) {
        table[i] = table[i-1] + table[i-2];
    }
    return table[n];
}

function runTest() {
    /*
    * Regular fibonacci run
    */
    let t1 = Date.now();
    console.log("Fibonacci for 40 : " + fibonacci(40));
    let t2 = Date.now();
    console.log("Time taken in ms = " + (t2-t1));

    /*
    *  Fibonacci run with Memoization
    */
   t1 = Date.now();
   console.log("Fibonacci for 200 : " + fibonacciMemoization(200, {}));
   t2 = Date.now();
   console.log("Time taken in ms = " + (t2-t1));

    /*
    * Fibonacci run with tabulization
    */
   t1 = Date.now();
   console.log("Fibonacci for 200 : " + fibonacciTabulization(200));
   t2 = Date.now();
   console.log("Time taken in ms = " + (t2-t1));
}

runTest();

/**
 * Rabin-Karp is an improved string matching algorithm
 * worst case complexity - O((n-m+1)(m)) //same as naive
 * However, the average case is much better - O(m+n)
 * 
 * Pre-processing : O(m)
 * Convert PATTERN to unique integer hash
 * Convert all possible strings of size m in TEXT to integer hash
 * 
 * Matching : O(n-m+1)
 * Match pattern hash with all generated text hash
 * 
 * Unique integer hash :
 * Let us assume our TEXT and PATTERN consists of [0..9, a..z]
 * We can represent this in radix-d notation.
 * d = 36
 * p = P[m] + d(P[m-1] + d(P[m-2] + ...))
 * 
 * similarly,
 * t0 = T[m] + d*(T[m-1] + d*(T[m-2] + ...))
 * t1, t2... tm can be calculated in O(1) from t0
 * 
 * t1 = (t0 - Math.pow(d,m-1)*T[0])*d + T[1]
 * 
 * Drawback :
 * For a big 'm' calculated unique values p, t0, .. can become larger than Integer
 * We can tweak this, by considering p = p mod q
 * where q is : (the bigger the better)
 * prime
 * q >= m
 * d*q just fits Integer size
 * 
 * Of course, there shall be spurious hits now.
 * This can be handled by explicitly checking P[1..m] = T[s+1..s+m] whenever a modulo match is found.
 * 
 */
const radix = {
    '0':0, '1':1, '2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9,
    'a':10, 'b':11, 'c':12, 'd':13, 'e':14, 'f':15, 'g':16, 'h':17, 'i':18, 'j':19,
    'k':20, 'l':21, 'm':22, 'm':23, 'o':24, 'p':25, 'q':26, 'r':27, 's':28, 't':29,
    'u':30, 'v':31, 'w':32, 'x':33, 'y':34, 'z':35
}

function rabinkarp(text, pattern, d) {
    console.log("Looking for pattern '%s' in text '%s'", pattern, text);

    let hasMatch = false;
    let T = Array.from(text), P = Array.from(pattern);
    let n = T.length, m = P.length;
    const h = Math.pow(d, m-1);

    // Calculate the uniquie value for the pattern
    // Calculate the unique value for T[1..m]
    let p=0, t=0;
    for(let i=0; i<m; i++) {
        p = d*p + radix[P[i]];
        t = d*t + radix[T[i]];
    }

    for(let s=0; s<n-m+1; s++) {
        if(p == t) {
            hasMatch = true;
            console.log("Match found at shift " + s);
        }
        t = (t - radix[T[s]] * h)*d + radix[T[s+m]]
    }
    if(!hasMatch) {
        console.log("No match found");
    }
}

function rabinkarpmodulo(text, pattern, d, q) {
    console.log("Looking for pattern '%s' in text '%s'", pattern, text);

    let hasMatch = false;
    let T = Array.from(text), P = Array.from(pattern);
    let n = T.length, m = P.length;
    let h = Math.pow(d, m-1) % q;

    // Calculate the uniquie value for the pattern
    // Calculate the unique value for T[1..m]
    let p=0, t=0;
    for(let i=0; i<m; i++) {
        p = (d*p + radix[P[i]])%q;
        t = (d*t + radix[T[i]])%q;
    }

    for(let s=0; s<n-m+1; s++) {
        if(p == t) {
            //Valiate in case of spurious hit
            let matched = true;
            for(let i=0; i<m; i++) {
                if(P[i] != T[s+i]) {
                    matched = false;
                }
            }
            if(matched) {
                hasMatch = true;
                console.log("Match found at shift " + s);
            }
        }
        if(s < n-m) {
            t = ((t - radix[T[s]] * h)*d + radix[T[s+m]]) % q;
            t = t < 0 ? t+q : t;
        }
    }
    if(!hasMatch) {
        console.log("No match found");
    }
}

function runTest() {
    console.log();
    console.log("****** Rabin Karp string matching *******");
    rabinkarp("abcabaabcabac","abaa",36);
    console.log();
    console.log("****** Rabin Karp string matching with Modulo *******");
    rabinkarpmodulo("abcabaabcabac","abaa",36, 7);
    console.log();
    console.log("** This input set has multiple spurious hits **");
    rabinkarpmodulo("3141592653589793","26",10, 11);
}

runTest();
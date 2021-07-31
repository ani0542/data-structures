Stack = require('./stack.js');

function nextgreaternumber(arr) {
    console.log(arr);
    let s = new Stack();

    if(arr == null || arr.length == 0) {
        return "Empty array";
    }
    else if(arr.length == 1) {
        return -1
    }
    else {
        s.push(arr[0]);
        for(let i=1; i<arr.length; i++) {
            if(s.peak() > arr[i]) {
                s.push(arr[i]);
            }
            else {
                while(s.peak() < arr[i]) {
                    console.log(s.peak(), arr[i]);
                    s.pop();
                }
                s.push(arr[i]);
            }
        }
        while(s.size() > 0) {
            console.log(s.peak(), -1);
            s.pop();
        }
    }
}

function runTest() {
    let ArrayGenerator = require('../Utilities/arrayGenerator.js');
    //nextgreaternumber(ArrayGenerator.generateArray(5, {min: 0}));
    //nextgreaternumber([68, 22, 62, 31, 44]);
    nextgreaternumber([4,5,12,11,1,25,6]);
}

runTest();
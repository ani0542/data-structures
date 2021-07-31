function runTest() {
    let ArrayGenerator = require('../Utilities/arrayGenerator.js');
    let Stack = require('./stack.js');

    //Initialize stack
    let s = new Stack();
    let dataArray = ArrayGenerator.generateArray(5, {min:0, max:30, includeRepeated:false})

    /* Test cases */
    console.log("=====Test case output=====");
    console.log();
    console.log("Input data : "+ dataArray);

    console.log();
    console.log("** Inserting to Stack **");
    dataArray.forEach(value => s.push(value));
    s.printStack();

    console.log("** Deleting from Stack **");
    console.log("Popped value: " + s.pop());
    s.printStack();

    console.log("** Peek Stack **");
    console.log("Peak value: " + s.peek());
}

runTest();
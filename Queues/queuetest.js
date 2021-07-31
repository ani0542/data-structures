function runTest() {
    let ArrayGenerator = require('../Utilities/arrayGenerator.js');
    let Queue = require('./queue.js');
  
    //Initialize LinkedList with random array
    let queue = new Queue(5);
    let dataArray = ArrayGenerator.generateArray(5, {min:0, max:10})
    console.log("=====Queue output=====");
    console.log();
    console.log("Input data : "+ dataArray);
  
    console.log();
    console.log("**Enqueue**");
    dataArray.forEach(value => queue.enqueue(value));
    queue.printQueue();
    console.log("**Check overflow**");
    queue.enqueue(10);
  
    console.log();
    console.log("**Dequeue**");
    console.log("Dequeued value : "+ queue.dequeue());
    queue.printQueue();
    console.log("**Check underflow**");
    console.log("Dequeued value : "+ queue.dequeue());
    console.log("Dequeued value : "+ queue.dequeue());
    console.log("Dequeued value : "+ queue.dequeue());
    console.log("Dequeued value : "+ queue.dequeue());
    console.log("Dequeued value : "+ queue.dequeue());
  }
  
  runTest();
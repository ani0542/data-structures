function runTest() {
    let ArrayGenerator = require('../Utilities/arrayGenerator.js');
    let Trie = require('./trie.js');

    //Initialize Trie with array
    let trie = new Trie();
    let dataArray = ["abc","abcd","abk"]

    console.log("=====Trie test output=====");
    console.log();
    console.log("Input data : "+ dataArray);

    console.log();
    console.log("** Insert iterative **");
    dataArray.forEach(value => {trie.trieroot = trie.insert(trie.trieroot, value)});

    console.log();
    console.log("** Print All Words **");
    trie.printAllWords(trie.trieroot);

    console.log();
    console.log("** Search Word **");
    trie.search(trie.trieroot, "abc");

    console.log();
    console.log("** Delete Word **");
    trie.delete(trie.trieroot, "abc");
    console.log("Remaining words :");
    trie.printAllWords(trie.trieroot);
}

runTest();
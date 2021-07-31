class TrieNode {
    constructor() {
        this.children = new Map();//Map<character, TrieNode>
        this.endOfWord = false;
    }
}

class Trie {
    constructor() {
        this.trieroot = null;
    }

    printAllWords(trieroot, word=[]) {
        if(trieroot == null) {
            console.log("Root is null");
            return;
        }
        if(trieroot.endOfWord) {
            console.log(word.join(''));
        }
        if(trieroot.children.size == 0) {
            word = [];
            return;
        }
        for(let [key, value] of trieroot.children) {
            word.push(key);
            this.printAllWords(value, word);
            word.pop();
        }
    }

    insert(trieroot, word) {
        if(word == null || word.length == 0) {
            console.log("Given word is null/empty");
            return;
        }

        let dataArr = Array.from(word);
        let len = dataArr.length;

        if(trieroot == null) {
            trieroot = new TrieNode();
        }

        let temp = trieroot;
        for(let i=0; i<len; i++) {
            if(!temp.children.get(dataArr[i])) {
                let node = new TrieNode();
                temp.children.set(dataArr[i], node);
            }
            temp = temp.children.get(dataArr[i]);
        }
        temp.endOfWord = true;

        return trieroot;
    }

    search(trieroot, word) {
        if(word == null || word.length == 0) {
            console.log("Given word is null/empty");
            return;
        }
        if(trieroot == null) {
            console.log("Root is null");
            return;
        }

        let dataArr = Array.from(word);
        let exists = this.searchrecursive(trieroot, dataArr, 0);
        console.log(word + (exists ? " exists" : " does NOT exist") + " in given Trie");

    }

    searchrecursive(trieroot, dataArr, idx) {
        if(idx == dataArr.length && trieroot.endOfWord) {
            return true;
        }
        return trieroot.children.get(dataArr[idx]) &&
            this.searchrecursive(trieroot.children.get(dataArr[idx]), dataArr, ++idx)
    }

    delete(trieroot, word) {
        if(word == null || word.length == 0) {
            console.log("Given word is null/empty");
            return;
        }
        if(trieroot == null) {
            console.log("Root is null");
            return;
        }

        let dataArr = Array.from(word);
        let exists = this.searchrecursive(trieroot, dataArr, 0);
        if(!exists) {
            console.log("Cannot delete. Given word does not exist in Trie.");
            return;
        }

        this.deleterecursive(trieroot, dataArr, 0);
        console.log("Deleted word : " + word);
    }

    deleterecursive(trieroot, dataArr, idx) {
        //Reach the last character of word to be deleted
        if(idx == dataArr.length && trieroot.endOfWord) {
            //No longer word exists
            if(trieroot.children.size == 0) {
                return true;
            }
            //In case a longer word exists, set endOfWord=false of word to be deleted
            else {
                trieroot.endOfWord = false;
                return false;
            }
        }

        //canDelete=true only if multiple children do not exist
        let canDelete = trieroot.children.size == 1;
        canDelete = this.deleterecursive(trieroot.children.get(dataArr[idx]), dataArr, ++idx) && canDelete;

        if(canDelete) {
            //Delete trie mapping
            trieroot.children.delete(dataArr[--idx]);
            //Handle, case - endOfWord of a shorter word is reached
            return trieroot.endOfWord ? false : true;
        }
        else { 
            return false;
        }
    }
}

module.exports = Trie;
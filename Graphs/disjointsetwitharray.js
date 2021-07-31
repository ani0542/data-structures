class DisjointSet {

    constructor() {
        this.container = [];
    }

    printdisjointset(disjointset) {
        let printStr = '{';
        for(let set of disjointset.container.keys()) {
            printStr += '[';
            for(let element of set) {
                printStr += element + ","
            }
            printStr = printStr.substr(0,printStr.length-1);
            printStr += '],';
        }
        printStr = printStr.substr(0,printStr.length-1);
        printStr += '}';
        console.log(printStr);
    }

    makeset(disjointset, arr) {
        for(let i=0; i<arr.length; i++) {
            disjointset.container[i] = i;
        }
        return disjointset;
    }

    findandmerge(disjointset, settofind) {
        let unionset = new Set();
        for(let set of disjointset.container.keys()) {
            let belongsCtr = 0;
            for(let element of settofind) {
                if(set.has(element)) {
                    belongsCtr++;
                }
            }
            //search belongs to same set
            if(belongsCtr > 1) {
                return disjointset;
            }
            else if(belongsCtr == 1) {
                for(let element of set) {
                    unionset.add(element);
                }
                disjointset.container.delete(set);
            }
        }
        disjointset.container.add(unionset);
        return disjointset;
    }

}

function runTest() {

    let disjointset = new DisjointSet();
    disjointset = disjointset.makeset(disjointset, [1,2,3,4,5,6,7,8]);
}

runTest();

function generateArray(size, options={})
{
    const condition = Object.assign({
        sorted: false,
        includeRepeated: true,
        min: -100,
        max: 100,
    }, options);

    //Create array with random elements within range [min, max]
    let arr = [];
    while(arr.length != size) {
        let val = Math.floor(Math.random() * (condition.max+1 - condition.min) + condition.min);
        //Handle repeated elements
        if(condition.includeRepeated || !arr.includes(val)) {
            arr.push(val);
        }
    }

    //Sort the array
    if(condition.sorted) {
        arr.sort((a,b) => a-b);
    }

    return arr;
}

module.exports.generateArray = generateArray;
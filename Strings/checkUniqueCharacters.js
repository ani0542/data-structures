let ArrayGenerator = require('../Utilities/arrayGenerator.js');

console.log(ArrayGenerator.generateArray(10));
console.log(ArrayGenerator.generateArray(10, {sorted:true}));
console.log(ArrayGenerator.generateArray(5, {min:0,max:9}));
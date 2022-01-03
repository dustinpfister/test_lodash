let _ = require('lodash');


let arr = [['x', 1],['y', 2], ['z', 3]];

let obj =  _.fromPairs(arr);

console.log(obj);
// { x: 1, y: 2, z: 3 }

let arr2 = _.toPairs(obj);
console.log(arr2);
// [['x', 1],['y', 2], ['z', 3]]
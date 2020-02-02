let _ = require('lodash');


let arr = [['x', 1],['y', 2], ['z', 3]];

console.log( _.fromPairs(arr) );
// { x: 1, y: 2, z: 3 }

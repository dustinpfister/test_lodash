let _ = require('lodash');

let a = [1,1,2,2,3,3,4,4,4,4]

let b = _.sortedUniq(a);

console.log(b); // [1,2,3,4];
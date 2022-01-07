let _ = require('lodash');

let a = _.xor([3, 1], [1, 2], [2, 2, 0]);
let b = _.sortBy(a, (n) => {
        return n;
    });

console.log(a);
// [3, 0]
console.log(b);
// [0, 3]

let _ = require('lodash');

// array element length
let a = [1, 2, 3, 4];

let sum = _.reduce(a, (acc, n) => {

        return acc + n;

    });

console.log(sum); // 10

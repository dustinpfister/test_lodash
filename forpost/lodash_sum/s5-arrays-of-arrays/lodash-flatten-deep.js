let _ = require('lodash');

let grid = [
    [[0, 2, 3], [0, 0, 0], [0, 0, 0]],
    [[0, 0, 0], [0, 7, 0], [0, 0, 0]],
    [[0, 5, 0], [0, 0, 0], [3, 0, 0]]
];

// using lodash flatten deep
let sum = _(grid).flattenDeep().sum();
console.log(sum); // 20


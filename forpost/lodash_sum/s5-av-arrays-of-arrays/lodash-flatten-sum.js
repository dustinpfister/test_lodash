let _ = require('lodash');

let grid = [
    [0, 1, 3],
    [0, 0, 5],
    [1, 0, 0]
];

// using lodash flatten and sum
let sum = _(grid).flatten().sum();
console.log(sum); // 10

sum = _.sum(_.flatten(grid));
console.log(sum); // 10

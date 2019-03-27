let _ = require('lodash');

let data = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

let kill = [
    [5, 6, 7, 8],
    [13, 14, 15, 16]
];

let result = _.differenceWith(data, kill, _.isEqual);

console.log(result);
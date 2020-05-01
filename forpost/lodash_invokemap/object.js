let _ = require('lodash');

let obj = {
    a: [7, 56, 3, 3, 0, 12],
    b: [6, 5, 4],
    c: [5, 5, 5, 1]
};

let sorter = function (a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
};

let r = _.invokeMap(obj, Array.prototype.sort, sorter);

console.log(r);
// [ [ 0, 3, 3, 7, 12, 56 ], [ 4, 5, 6 ], [ 1, 5, 5, 5 ] ]

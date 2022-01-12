let _ = require('lodash');

let arr = [ [7, 56, 3, 3, 0, 12], [6, 5, 4], [5, 5, 5, 1] ];
let r = _.invokeMap(arr, 'sort', function (a, b) {
    if (a < b) { return -1; }
    if (a > b) { return 1; }
    return 0;
});
console.log(r);
// [ [ 0, 3, 3, 7, 12, 56 ], [ 4, 5, 6 ], [ 1, 5, 5, 5 ] ]

let _ = require('lodash');

let arr = [
    [7, 56, 3, 3, 0, 12],
    [6, 5, 4],
    [5, 5, 5, 1]
];

let sorter = function (a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
};

let r = _.invokeMap(arr, 'sort', sorter);

console.log(r);

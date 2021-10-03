let _ = require('lodash');

const myRange = (start, size, step) => {
    let startN = start,
    arr = new Array(size),
    nDelta = step === undefined ? 1 : step;
    return _.map(arr, (el, i) => {
        return startN + i * nDelta;
    });
};

console.log( myRange(0, 10) );
// [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

console.log( myRange(5, 15, 5) );
// [ 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75 ]

console.log( _.range(5, 15, 5) );
// [5, 10]
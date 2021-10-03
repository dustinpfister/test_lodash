let _ = require('lodash');

const myRange = (start, size, step) => {
    let startN = start,
    arr = new Array(size);
    nDelta = nDelta === undefined ? 1 : step;
    return _.map(arr, (el, i) => {
        return startN + i * nDelta;
    });
};

console.log( myRange(0, 10) );
,4,5,6,7,8,9]

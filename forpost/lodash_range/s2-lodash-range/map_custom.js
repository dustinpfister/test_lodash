let _ = require('lodash');

const myRange = (start, size, step) => {
    let arr = new Array(size);
    step = step === undefined ? 1 : step;
    return _.map(arr, (el, i) => {
        let d = step;
        if (typeof step === 'function') {
            d = step(i, start, size);
        }
        return start + i * d;
    });
};

console.log(myRange(0, 10));
// [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

console.log(myRange(5, 15, 5));
// [ 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75 ]

console.log(_.range(5, 15, 5));
// [5, 10]

// I can still get a similar result to _.range if I just
// adjust the arguments to size, rather than a stop value
console.log(myRange(5, 2, 5));
// [5, 10]

// custom stepping
console.log(myRange(0, 5, (i) => Math.pow(2, i)));
// [ 0, 2, 8, 24, 64 ]

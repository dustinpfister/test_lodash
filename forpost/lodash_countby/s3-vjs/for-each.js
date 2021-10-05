let _ = require('lodash');

let arr = [{
        username: 'john',
        score: 37
    }, {
        username: 'jake',
        score: 67
    }, {
        username: 'bill',
        score: 20
    }
];

// for each
var counts = {};
arr.forEach((el, i, arr) => {
    var key = el.score >= 65 ? 'pass' : 'fail';
    counts[key] = counts[key] === undefined ? 1 : counts[key] += 1;
});
console.log(counts);

let _ = require('lodash');

let arr = _.chain([1, 2, 3, 4])
    .map((n) => {
        return Math.pow(2, n);
    })
    .filter((n) => {
        return n % 8 === 0;
    })
    .reverse()
    .sum();

// we have an wrapped object
// and not a final value
console.log(arr); // { Object }

// I must call value() to get what I want
console.log(arr.value()); // 24

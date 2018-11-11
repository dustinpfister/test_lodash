let _ = require('lodash');

let arr = _([1, 2, 3, 4])
    .map((n) => {
        return Math.pow(2, n);
    })
    .filter((n) => {
        return n % 8 === 0;
    })
    .reverse()
    .sum();

console.log(arr); // 24

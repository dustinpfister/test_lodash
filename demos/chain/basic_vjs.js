let _ = require('lodash');

let arr = [1, 2, 3, 4]
.map((n) => {
    return Math.pow(2, n);
})
.filter((n) => {
    return n % 8 === 0;
})
.reduce((acc, n) => {
    return acc + n
});

console.log(arr);

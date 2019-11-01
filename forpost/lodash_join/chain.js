let _ = require('lodash');

let arr = [0, 1, 2, 3, 4, 5]

// simple chain example
// using _.map, _.join and then
// creating the string value
let str = _.chain(arr)
    .map((n) => {
        return Math.pow(n, 2);
    })
    .join(':')
    .value();

console.log(str);
// 0:1:4:9:16:25

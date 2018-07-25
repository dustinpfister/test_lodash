let _ = require('lodash');

let sum = _.reduce([1, 1, 1, 1], function (sum, cur) {

        return sum + cur;

    });

console.log(sum); // 4


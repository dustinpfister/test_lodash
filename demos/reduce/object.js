let _ = require('lodash');

let sum = _.reduce({0:1,1:1,2:1,3:1}, function (sum, cur) {

        return sum + cur;

    });

console.log(sum); // 4


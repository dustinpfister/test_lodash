let _ = require('lodash');

let nums = [2,20,4,3,7,8,32,42,256];

let grouped = _.groupBy(nums, function (n) {

    return n < 10 ? 'fail' : 'pass'

    });

console.log(grouped);

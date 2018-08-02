let _ = require('lodash');

let nums = [2,20,4,3,7,8,32,42,256];

let grouped = _.groupBy(nums, function (n) {

    return String(Math.log(n) / Math.log(2)).indexOf('.') === -1 ? 'pow2': 'notPow2';

    });

console.log(grouped);

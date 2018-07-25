let _ = require('lodash');

let sum = Array.prototype.reduce.call({0:1,1:1,2:1,3:1,length:4}, function (sum, cur) {

    return sum + cur;

});

console.log(sum); // 4


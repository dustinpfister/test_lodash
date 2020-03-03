let _ = require('lodash');

let arr = [-1, 5, 7, -1, -1, 8, 7];

// lodash \_.remove and \_.eq can be used also to do 
// the same thing more or less
arr = _.remove(arr, function (el) {
        return !_.eq(el, -1);
    });

console.log(_.join(arr, ':'));
// 5:7:8:7

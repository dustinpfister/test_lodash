let _ = require('lodash');

let a = _.chain(' abc ')
    .trim()
    .split('')
    .thru(function (a) {
        return {
            arr: a
        };
    })
    .value();
console.log(a);
// { arr: [ 'a', 'b', 'c' ] }

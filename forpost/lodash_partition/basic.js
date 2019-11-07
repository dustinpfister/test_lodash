let _ = require('lodash');

let arr = [8, null, 32, 'foo', NaN, 'bar', false, {}, 64, 128];
let parts = _.partition(arr, (el) => {
        return typeof el === 'number' && !_.isNaN(el);
    });
console.log(parts[0]);
// [ 8, 32, 64, 128 ]
console.log(parts[1]);
// [ null, 'foo', NaN, 'bar', false, {} ] 
let _ = require('lodash');

var arr = ['foo', 27, 'man', 42, 'chew'];
 
_.remove(arr, function (el) {
 
    // remove all numbers
    return typeof el === 'number';
 
});
 
console.log(arr); // ['foo','man',chew];

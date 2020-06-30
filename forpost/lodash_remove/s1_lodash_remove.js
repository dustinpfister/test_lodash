let _ = require('lodash');

let arr = ['foo', 27, 'man', 42, 'chew'];
 
_.remove(arr, (el) => {
 
    // remove all numbers
    return typeof el === 'number';
 
});
 
console.log(arr); // ['foo','man',chew];
let _ = require('lodash');

let arr = ['foo', 27, 'man', 42, 'chew'];
 
let arr2 = _.filter(arr, (el) => {
 
    // filter all numbers, by returning true
    // for everything that is not a number
    return typeof el != 'number';
 
});
 
console.log(arr); // ['foo', 27, 'man', 42, 'chew'];
console.log(arr2); // ['foo','man',chew];
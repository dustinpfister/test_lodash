let _ = require('lodash');
// basic example using an array of numbers
let a = {
    0: 2, 1: -7, 2: 0, 3: 40,
    length: 4
};
let b = _.filter(a, function(val){
    return val > 0;
});
console.log( b ); // [2, 40]
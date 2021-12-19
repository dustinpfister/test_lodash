let _ = require('lodash');


// basic example using an array of numbers
let a = [4, -1, 7, 7, -3, -5, 1];
let b = _.filter(a, function(val){
    return val > 0;
});
console.log( b ); // [4, 7, 7, 1]
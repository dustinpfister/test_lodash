let _ = require('lodash');


let source = [1,2,3,4,5];
// create a new array from the source array by preforming
// an action with the given function for each element in the
// source array using lodash map
let b = _.map(source, function(el){
    return el * 10;
});
// lodash map creates the new array and WILL NOT mutate the 
// source array in place when doing so
console.log(b);
// [10,20,30,40,50]
console.log(source);
// [ 1, 2, 3, 4, 5 ]


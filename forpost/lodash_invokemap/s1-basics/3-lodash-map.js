let _ = require('lodash');
 
// invoke map can just be used with an array of numbers
let nums = [0.5,1.75, 2.9, 4.05];
let a = _.invokeMap(nums, function(a){
    return Math.round(this)
});
console.log(a);
// [ 1, 2, 3, 4 ]
 
// although in some cases it might be better to just one map
let b = _.map(nums, Math.round);
console.log(b);
// [ 1, 2, 3, 4 ]
 
let c = _.map(nums, function(n){
    return ''.split.call(n, '.');
});
console.log(c);
// [ [ '0', '5' ], [ '1', '75' ], [ '2', '9' ], [ '4', '05' ] ]

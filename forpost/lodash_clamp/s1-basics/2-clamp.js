_ = require('lodash');
// custom get method using lodash get and clamp
var get = function(arr, i, def){
    return _.get(arr, _.clamp(i, 0, arr.length - 1), def);
};
// using the get method
var arr = [1, 2, 3];
console.log( get(arr, -1, 0) ); // 1
console.log( get(arr, 2, 0) );  // 3
console.log( get(arr, 3, 0) );  // 3
// using just clamp directly
console.log( _.clamp(-1, 0, 5) ); // 0
console.log( _.clamp(7, 0, 5) );  // 5
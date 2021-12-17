_ = require('lodash');
// using lodash mixin to add a lodash wrap number
_.mixin({'wrapNumber': function(n, min, max){
    var r = max - min;
    return (min + ((((n - min) % r) + r) % r));
}});
// get method using custom wrap method
var get = function( arr, i, def ){
    return _.get( arr, _.wrapNumber( i, 0, arr.length ), def );
};
// using the get method
var arr = [1, 2, 3];
console.log( get(arr, -1, 0) ); // 3
console.log( get(arr, 2, 0) );  // 3
console.log( get(arr, 3, 0) );  // 1
// can use the wrap number method directly
console.log( _.wrapNumber(-1, 0, 10) ); // 9
console.log( _.wrapNumber(10, 0, 10) ); // 0
console.log( _.wrapNumber(-6, -5, 5) ); // 4
console.log( _.wrapNumber(5, -5, 5) ); // -5

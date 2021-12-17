_ = require('lodash');

_.mixin({'wrapNumber': function(n, min, max){
    var range = max - min;
    return (min + ((((n - min) % range) + range) % range));
}});

// to high
console.log( _.wrapNumber(6, -5, 5) ); // -4
console.log( _.wrapNumber(5, -5, 5) ); // -5

// in range
console.log( _.wrapNumber(4, -5, 5) ); // 4
console.log( _.wrapNumber(3, -5, 5) ); // 3
console.log( _.wrapNumber(2, -5, 5) ); // 2
console.log( _.wrapNumber(1, -5, 5) ); // 1
console.log( _.wrapNumber(0, -5, 5) ); // 0
console.log( _.wrapNumber(-1, -5, 5) ); // -1
console.log( _.wrapNumber(-2, -5, 5) ); // -2
console.log( _.wrapNumber(-3, -5, 5) ); // -3
console.log( _.wrapNumber(-4, -5, 5) ); // -4
console.log( _.wrapNumber(-5, -5, 5) ); // -5

// to low
console.log( _.wrapNumber(-6, -5, 5) ); // 4
console.log( _.wrapNumber(-7, -5, 5) ); // 3

//console.log( Math.sqrt(  Math.pow(min - max, 2) ) );
//console.log( _.wrapNumber( -1, min, max ) ); // -1
//console.log( _.wrapNumber( 0, min, max ) ); // 0
//console.log( _.wrapNumber( 5, min, max ) ); // -5

/*
var get = function( arr, i, def ){
	console.log(_.wrapNumber( i, 0, 3 ));
    return _.get( arr, _.wrapNumber( i, 0, arr.length ), def );
};
*/

//console.log( _.wrapNumber(-1, -5, 5) ); // 9
//console.log( _.wrapNumber(-2, -5, 5) ); // 0

// using the get method

//var arr = [1, 2, 3];

//console.log(  _.wrapNumber(-1, 0, arr.length) );

/*
console.log( get(arr, -1, 0) ); // 3
console.log( get(arr, 2, 0) );  // 3
console.log( get(arr, 3, 0) );  // 1
*/
// can use the wrap number method directly
//console.log( _.wrapNumber(-1, 10) ); // 9
//console.log( _.wrapNumber(10, 10) ); // 0

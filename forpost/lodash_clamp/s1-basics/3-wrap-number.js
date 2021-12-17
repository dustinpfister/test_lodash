_ = require('lodash');
// adding a _.wrapNumber method to lodash
_.mixin({'mod': function(n, b){
    return (n % b + b) % b;
}});
_.mixin({'mag': function(min, max){
    return Math.sqrt(  Math.pow(min - max, 2) );
}});
_.mixin({'wrapNumber': function(n, min, max){
    //n = n === undefined ? 0 : n;
    //min = min === undefined ? 0 : min;
    //max = max === undefined ? 1 : max;
	//let b = max - min;
    //return min + (n % b + b) % b;
	//var r = _.mag(min, max); //Math.sqrt(  Math.pow(min - max, 2) );
	
	//return _.mod(n + r / 2, r) - r / 2;
	
}});

var min = 0,
max = 5;

console.log(_.mag(0, 5)); // 5
console.log(_.mag(-5, 5)); // 10

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

_ = require('lodash');

// adding a _.wrapNumber method to lodash
_.mixin({'wrapNumber': function(n, b){
    n = n === undefined ? 0 : n;
    b = b === undefined ? 1 : b;
    return (n % b + b) % b;
}});
console.log(_.wrapNumber(-1, 10)); // 9
console.log(_.wrapNumber(10, 10)); // 0

/*
 var arr = ['fear','the','foo','man','chew'];
 console.log(arr[-3]); // undefined
 
 // the nth method will wrap with negative numbers
 console.log( _.nth(arr, -3) ); // 'foo'
 // but it will not wrap values at length or higher
  console.log( _.nth(arr, 6) ); // undefined
*/
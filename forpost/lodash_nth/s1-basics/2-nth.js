_ = require('lodash');

 var arr = ['fear','the','foo','man','chew'];
 console.log(arr[-3]); // undefined
 
 // the nth method will wrap with negative numbers
 console.log( _.nth(arr, -3) ); // 'foo'
 // but it will not wrap values at length or higher
  console.log( _.nth(arr, 6) ); // undefined
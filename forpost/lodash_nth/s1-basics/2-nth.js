_ = require('lodash');

 var arr = ['fear','the','foo','man','chew'];
 
 console.log(arr[-3]); // undefined
 console.log( _.nth(arr, -3) ); // 'foo'
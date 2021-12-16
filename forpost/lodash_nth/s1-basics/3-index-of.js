_ = require('lodash');

 var arr = ['fear','man','foo','man','chew'];
 console.log( _.indexOf(arr, 'man') );     // 1
 console.log( _.indexOf(arr, 'man', -3) ); // 3
 // will not wrap though
 console.log( _.indexOf(arr, 'man', 7) );  // -1
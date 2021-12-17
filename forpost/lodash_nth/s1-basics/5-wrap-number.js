_ = require('lodash');

// adding a _.wrapNumber method to lodash
/*
_.mixin({'wrapNumber': function(n, b){
    n = n === undefined ? 0 : n;
    b = b === undefined ? 1 : b;
    return (n % b + b) % b;
}});
*/
_.mixin({'wrapNumber': function(n, min, max){
    var r = max - min;
    return (min + ((((n - min) % r) + r) % r));
}});
// updated nth2 method that WILL WRAP
_.mixin({'nth2': function(arr, i){
    return arr[_.wrapNumber(i, 0, arr.length)];
}});

// can use the wrap number method directly
console.log(_.wrapNumber(-1, 0, 10)); // 9
console.log(_.wrapNumber(10, 0, 10)); // 0

 // the nth2 method will wrap with negative numbers, 
 // and index values at and above array length
 var arr = ['fear','the','foo','man','chew'];
 console.log(arr[-3]); // undefined
 console.log( _.nth2(arr, -3) ); // 'foo'
 console.log( _.nth2(arr, 6) ); // 'the'
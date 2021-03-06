let _ = require('lodash');

let arr1 = [1, 2, [3, 4, [5, 6]]],

arr2 = [7, 8, 9];

let full = _.concat(arr1, arr2);

console.log(full); // [ 1, 2, [ 3, 4, [ 5, 6 ] ], 7, 8, 9 ]

// arrays are a kind of object,
// and they are copied by reference
// so a change like this
_.each(arr1[2], function (el, i) {

    arr1[2][i] = null;

});

// will make a change to what is made with concat as well
console.log(full); // [ 1, 2, [ null, null, null ], 7, 8, 9 ]

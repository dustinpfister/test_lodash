let _ = require('lodash');

let arr1 = [1, 2, [3, 4, [5, 6]]],

arr2 = [7, 8, 9];

let full = _.cloneDeep(_.concat(arr1, arr2));

// arrays are a kind of object,
// and they are copied by reference
// but I made a deep clone
// so a change like this
_.each(arr1[2], function (el, i) {

    arr1[2][i] = null;

});

// will not make a change to what is made with concat
console.log(full); // [ 1, 2, [ 3, 4, [ 5, 6 ] ], 7, 8, 9 ]

let _ = require('lodash');

let arr = ['foo','bar', 'baz'];

// so yep it gets the first element of an array
console.log(_.first(arr) ); // 'foo'

// but do does this
console.log( arr[0] ); // 'foo'
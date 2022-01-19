let _ = require('lodash');

let arr = ['foo','bar', 'baz'];
// the lodash first method will not mutate in place
console.log( _.first(arr) ); // 'foo'
console.log( arr ); // ['foo','bar', 'baz'];
 
// other methods like pullAt will mutate in place
console.log(_.pullAt(arr, 0)[0]); // 'foo'
console.log( arr ); // ['foo','bar', 'baz'];

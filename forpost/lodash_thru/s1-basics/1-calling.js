let _ = require('lodash');

let a = {
    arr: _.split( _.trim(' abc '), '' )
};
console.log(a);
// { arr: [ 'a', 'b', 'c' ] }

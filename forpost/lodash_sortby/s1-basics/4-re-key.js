let _ = require('lodash');

let obj = {
    foo: 42,
    bar: 0,
    baz: -7,
    zoo: 5
};

// re key by value
let a = _.chain( obj ).map( (n, key) => { return [n,key]; } ).sortBy((arr) => { return arr[0]; }).value();
let newObj = {};
let b = _.forEach(a, (arr) => { newObj[arr[1]] = arr[0]; });

console.log( _.keys(obj) );
// [ 'foo', 'bar', 'baz', 'zoo' ]
console.log( _.keys(newObj) );
//[ 'baz', 'bar', 'zoo', 'foo' ]


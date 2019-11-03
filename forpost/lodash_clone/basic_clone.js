let _ = require('lodash');

// I created an object
var obj = {
    foo: 'bar',
    n: 42
},

// cloning will copy the object
a = _.clone(obj);

// a change to the copy will effect only the copy
a.foo = 'foobar';
console.log(a.foo); // 'foobar'
console.log(obj.foo); // 'bar'

// the older object will retain the same values
// and the new object will still share values that
// have not changed
console.log(obj.n); // 42
console.log(obj.foo); // 'bar'
console.log(a.n); //42
console.log(a.foo); // 'foobar'
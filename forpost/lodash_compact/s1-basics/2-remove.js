let _ = require('lodash');

let a = [null,1,'foo',NaN,false,'bar',0,undefined,undefined,42];

// lodash remove can work just like lodash compact in that the return value
// of return well be the elements that are removed. However lodash remove
// will also mutate the source array in place
let b = _.remove( a, (el) => { return !!el; } );
console.log(b); // [ 1, 'foo', 'bar', 42 ]
console.log(a); // [ null, NaN, false, 0, undefined, undefined ]

// there are ways of addressing the mutation in place problem though such as using
// the lodash clone method, also I have control of the condition that is used to remove
// elements.
a = [null,1,'foo',NaN,false,'bar',0,undefined,undefined,42];
let c = _.remove( _.clone(a), (el) => { return typeof el === 'number' && !_.isNaN(el); } );
console.log(c); // [ 1, 0, 42 ]
console.log(a); // [ null, 1, 'foo', NaN, false, 'bar', 0, undefined, undefined, 42 ]


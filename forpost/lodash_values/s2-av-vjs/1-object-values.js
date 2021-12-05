let obj = {
    foo: 'bar',
    n: 42
};
// there is also the native Object.values
// that does the same thing as lodash values
// there is also an Object.keys
console.log( Object.values(obj) ); // [ 'bar', 42 ]
console.log(Object.keys(obj)); // ['foo', 'n']




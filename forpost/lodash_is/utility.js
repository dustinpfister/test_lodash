let _ = require('lodash');

// a NaN value
let n = NaN;

// the native isNaN does not work as
// expected
console.log(isNaN(n)); // true
console.log(isNaN(undefined)); // true

// So I make my own that does
let myIsNaN = (a) => {
    if (typeof a != 'number') {
        return false;
    }
    return a + '' === 'NaN';
};
console.log(myIsNaN(n)); // true
console.log(myIsNaN(undefined)); // false

// If I want to I can start making methods
// like this as part of my own utility library
let foo = {};
foo.isNaN = (a) => {
    if (typeof a != 'number') {
        return false;
    }
    return a + '' === 'NaN';
};
console.log(foo.isNaN(n)); // true
console.log(foo.isNaN(undefined)); // false

// but why bother writing my own utility library
// if one like lodash is all ready out there?
console.log(_.isNaN(n)); // true
console.log(_.isNaN(undefined)); // false
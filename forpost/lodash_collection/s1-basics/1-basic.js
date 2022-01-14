let _ = require('lodash');

// an Array
let a = [ 1, 2, 3];
 
// an Object that is formated like an Array
let b = {
    0: 1,
    1: 2,
    2: 3
};
Object.defineProperty(b, 'length', {
    value: 3
});
 
// An Object with named rather than numbered keys and no length property
let c = {
    zero: 1,
    one: 2,
    two: 3
};

// a collection method like lodash forEach, will work with all of these
let func = (item, key, obj) => {
    console.log(key + ' : ' + item + ' : ' + Object.keys(obj).length );
};
_.forEach(a, func);
// 0: 1: 3 
// 1: 2: 3 
// 2: 3: 3 
_.forEach(b, func);
// 0: 1: 3 
// 1: 2: 3 
// 2: 3: 3 
_.forEach(c, func);
// zero: 1: 3 
// one: 2: 3 
// two: 3: 3
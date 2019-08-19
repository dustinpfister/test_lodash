let _ = require('lodash');

let obj = {
    index: 0,
    x: 5,
    y: 12,
    z: 3
};

// start out with _.map and _.some
let pairs = _.map(obj, (prop, key) => {
        return !_.some(['index', 'z'], (omitKey) => {
            return omitKey === key;
        }) ? [key, prop]: false;
    });

// This gives me something to start with
console.log(pairs);
// [ false, [ 'x', 5 ], [ 'y', 12 ], false ]

// then I use remove to have a clean set of pairs
pairs = _.remove(pairs);
console.log(pairs);
// [ [ 'x', 5 ], [ 'y', 12 ] ]

// now I can use that with _.fromPairs to get the new object
let newObj = _.fromPairs(pairs);
console.log(newObj);
// { x: 5, y: 12 }

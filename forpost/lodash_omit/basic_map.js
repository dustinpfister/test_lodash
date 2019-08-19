let _ = require('lodash');

let obj = {
    index: 0,
    x: 5,
    y: 12,
    z: 3
};

let pairs = _.map(obj, (prop, key) => {

        return !_.some(['index', 'z'], (omitKey) => {

            return omitKey === key;

        }) ? [key, prop]: false;

    });

console.log(pairs);
// [ false, [ 'x', 5 ], [ 'y', 12 ], false ]

pairs = _.remove(pairs);
console.log(pairs);
// [ [ 'x', 5 ], [ 'y', 12 ] ]

let newObj = _.fromPairs(pairs);
console.log(newObj);
// { x: 5, y: 12 }

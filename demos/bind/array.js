let _ = require('lodash');

let obj = {

    0: 'hi',
    1: 'how',
    2: 'are',
    3: 'you',
    4: 'doing',
    5: 'today',
    length: 6
};

obj.slice =  _.bind(Array.prototype.slice, obj)

console.log(obj.slice(1, 4)); // [ 'how', 'are', 'you' ]

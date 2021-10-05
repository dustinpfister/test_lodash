let _ = require('lodash');

let words = ['foo', 'man', 'chew', 'happy', 'bar'];

console.log( _.countBy(words, (el) => {
        return el.length;
    }) );

console.log( _.countBy(words, (el) => {
        return _.property('length')(el);
    }) );

console.log( _.countBy(words, _.property('length')) );

console.log( _.countBy(words, 'length') );

// all of these produce the same result
// { '3': 3, '4': 1, '5': 1 }
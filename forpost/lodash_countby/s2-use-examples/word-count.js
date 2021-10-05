let _ = require('lodash');

let words = 'chew foo man foo chew foo foo'.split(' ');
let obj = _.countBy(words, (word) => {
        return word;
    });
console.log(obj);
//{ chew: 2, foo: 4, man: 1 }

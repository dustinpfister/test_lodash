let _ = require('lodash');

let a = {
    arr: _.chain(' abc ').trim().split('').value()
};
console.log(a);
// { arr: [ 'a', 'b', 'c' ] }

let _ = require('lodash');

var obj = {

    visible: 'I count'

};

Object.defineProperty(obj, 'hidden', {

    value: 'I do not count',
    writable: false,

    // default is false actually
    // just putting this here to be explicit
    enumerable: false

});

console.log(obj.hidden); // I count
console.log(obj.visible); // I do not count

// _.size or Object.keys(obj).length 
// will only return enumerable lengths
console.log(_.size(obj)); // 1
console.log(Object.keys(obj).length); // 1

// so there is Object.getOwnPropertyNames()
console.log( Object.getOwnPropertyNames(obj).length ); // 2


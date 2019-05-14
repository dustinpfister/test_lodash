let _ = require('lodash');

let obj = {
    foo: 'bar',
    n: 42
};

var keys = function (obj) {
    var keyNames = [],
    keyName;
    for (keyName in obj) {
        keyNames.push(keyName);
    }
    return keyNames;
};

console.log( keys(obj) ); // ['foo', 'n']
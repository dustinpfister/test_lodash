let obj = {
    foo: 'bar',
    n: 42
};

// stand alone method
var keys = function (obj) {
    var keyNames = [],
    keyName;
    for (keyName in obj) {
        keyNames.push(keyName);
    }
    return keyNames;
};

console.log( keys(obj) ); // ['foo', 'n']

// polyfill
Object.keys = Object.keys || function (obj) {
    var keyNames = [],
    keyName;
    for (keyName in obj) {
        keyNames.push(keyName);
    }
    return keyNames;
};

console.log( Object.keys(obj) ); // ['foo', 'n']
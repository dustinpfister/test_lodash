

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

console.log(Object.keys(obj).length); // 1

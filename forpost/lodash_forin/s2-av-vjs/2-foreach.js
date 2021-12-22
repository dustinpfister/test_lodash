// Simple Constructor and Prototype
let A = function () {this.b = 42;};
A.prototype.c = 7;
// Object.keys, array concat, and array foreach
let a = new A(),
keys = Object.keys(a).concat(Object.keys(a.constructor.prototype)),
str = '';
keys.forEach(function (key) {
    str += key + ':' +a[key] + ';';
});
console.log(str);
// b:42;c:7;

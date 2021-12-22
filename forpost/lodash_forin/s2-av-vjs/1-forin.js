// Simple Constructor and Prototype
let A = function () {
    this.b = 42
};
A.prototype.c = 7;
// using the for in loop
let a = new A(),
str = '';
for (let prop in a) {
  str += prop + ':' +a[prop] + ';';
}
console.log(str); // b:42;c:7;

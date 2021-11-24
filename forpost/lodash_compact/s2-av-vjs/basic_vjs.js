var arr = [null, 1, 'foo', NaN, false, 'bar', undefined, undefined, 42];

/*
var compact = function (a) {
var n = [];
a.forEach(function (el) {
if (!!el) {n.push(el)}
});
return n;
};
 */

var compact = function (a) {
    var i = a.length;
    while (i--) {
        if (!a[i]) {
            a.splice(i, 1);
        }
    }
    return a;
};

console.log(compact(arr)); // [ 1, 'foo', 'bar', 42 ]
console.log(arr); // [ 1, 'foo', 'bar', 42 ]

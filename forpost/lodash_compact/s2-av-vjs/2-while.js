var compact = function (a) {
    var i = a.length;
    while (i--) {
        if (!a[i]) {
            a.splice(i, 1);
        }
    }
    return a;
};

var arr = [null, 1, 'foo', NaN, false, 'bar', undefined, undefined, 42];
console.log(compact(arr)); // [ 1, 'foo', 'bar', 42 ]

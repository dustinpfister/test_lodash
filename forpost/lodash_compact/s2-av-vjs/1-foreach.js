var compact = function (a) {
    var n = [];
    a.forEach(function (el) {
        if (!!el) {
            n.push(el)
        }
    });
    return n;
};

var arr = [null, 1, 'foo', NaN, false, 'bar', undefined, undefined, 42];
console.log(arr); // [ null, 1, 'foo', NaN, false, 'bar', undefined, undefined, 42 ] 
console.log(compact(arr)); // [ 1, 'foo', 'bar', 42 ]


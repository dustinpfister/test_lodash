var arr = [null, 1, 'foo', NaN, false, 'bar', undefined, undefined, 42];
arr = arr.filter(function (el) {
    return !!el;
});
console.log(arr); // [ 1, 'foo', 'bar', 42 ]

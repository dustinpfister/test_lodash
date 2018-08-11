var arr = [null, 1, 'foo', NaN, false, 'bar', undefined, undefined, 42];

console.log(arr.map(function (el) {

    return !!el;

}));

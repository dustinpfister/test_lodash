var range = function (start, end, step) {
    return new Array(10).fill(0).map(function (el, i) {
        return i;
    });
};
console.log(range(10)); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

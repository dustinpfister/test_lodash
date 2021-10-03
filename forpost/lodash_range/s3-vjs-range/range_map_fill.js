var range = function (start, end, step) {
    var len = start;
    if (end != undefined) {
        len = Math.floor(Math.abs(start - end) / step);
    }
    step = step === undefined ? 1 : step;
    return new Array(len).fill(0).map(function (el, i) {
        return start + i * step;
    });
};
console.log(range(10)); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

console.log(range(-2, 10, 2));

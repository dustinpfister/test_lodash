var range = function (start, end, step) {

    let arr = [],
    len = 0;

    step = step === undefined ? 1 : step;

    if (arguments.length === 1) {

        len = start;
        start = 0;
        end = start;

    } else {

        start = start === undefined ? 1 : start;
        end = end === undefined ? 1 : end;
        len = end - start;

    }

    var i = 0;
    while (i < len) {

        arr.push(start + i * step);

        i += 1;

    }

    return arr;

};

console.log( range(10) ); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log( range(10,15) ); // [ 10, 11, 12, 13, 14 ]
console.log( range(8, 16, 2) ); // [ 8, 10, 12, 14, 16, 18, 20, 22 ]


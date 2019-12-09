let arr1 = [1, 4, 5, NaN],
arr2 = [1, 2, 1, NaN];

let intersectTwo = (a, b) => {
    return a.filter((x) => {
        return b.some((y) => {
            return Object.is(x, y);
        });
    });
};

let intersection = function () {

    let r = [];

    let i = 1;
    while (i < arguments.length) {
        r.push(intersectTwo(arguments[0], arguments[i]));
        i += 1;
    }

    if (r.length != arguments.length - 1) {

        return [];
    }

};

console.log(intersection(arr1, arr2, arr3));

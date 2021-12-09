// polly fill for old browsers and versions of node that do
// not have Array.prototype.flat built in
Array.prototype.flat = function (depth) {
    var arr = this;
    depth = depth === undefined ? 1 : depth;
    var flattenLevel = function (arr, level) {
        var reducer = function (acc, val) {
            if (typeof val === 'object') {
                if (val.constructor.name === 'Array') {
                    var nextLevel = level + 1;
                    if (nextLevel <= depth) {
                        return acc.concat(flattenLevel(val, nextLevel));
                    }
                    return acc.concat([val]);
                }
            }
            return acc.concat(val);
        };
        return arr.reduce(reducer, []);
    };
    return flattenLevel(arr, 0);
};

let fromRed = (r) => {
    let g = 128 + Math.floor(r / 255) * 64,
    b = 255 - r;
    return [r, g, b];
};
// Using array map to create an array of arrays
let a = [0, 255].map(fromRed);
console.log(a);
// [ [ 0, 128, 255 ], [ 255, 192, 0 ] ]
// now using reduce and concat methods to flatten
let flat = a.flat();
console.log(flat);
// [ 0, 128, 255, 255, 192, 0 ]


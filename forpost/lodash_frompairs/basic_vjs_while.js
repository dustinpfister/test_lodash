
var fromPairs = function (arr) {
    let i = 0,
    len = arr.length,
    pair,
    obj = {};
    while (i < len) {
        pair = arr[i];
        obj[pair[0]] = pair[1];
        i += 1;
    }
    return obj;
};

let arr = [['x', 1], ['y', 2], ['z', 3]];

console.log(fromPairs(arr));
// { x: 1, y: 2, z: 3 }

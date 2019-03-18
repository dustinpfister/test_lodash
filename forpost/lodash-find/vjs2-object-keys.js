var find = function (col, forEach) {
    var keys = Object.keys(col),
    i = keys.length,
    results = [];
    while (i--) {
        if (forEach(col[keys[i]], keys[i])) {
            results.push(col[keys[i]]);
        }
    }
    return results;
};

var nums = [7, 8, 13, -5, 32, 2.5];
var pow2 = find(nums, function (val, key) {
    var p = Math.log(val) / Math.log(2);
    return p > 0 && String(p).indexOf('.') === -1;
});

console.log(pow2); // [32,8]

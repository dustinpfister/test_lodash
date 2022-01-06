
// SameValue algorithm pony fill
var eq = function (x, y) {
    if (x === y) { // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
    } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
    }
};

// vjs pull
var pull = function (arr) {
    var len = arguments.length,
    val,
    i = 1;
    if (arguments.length <= 1) {
        return arr || [];
    }
    while (i < len) {
        val = arguments[i];
        arr = arr.filter(function (el) {
                return !eq(el, val);
            });
        i += 1;
    }
    return arr;
};

var arr = [-1, 5, 7, -1, -1, 8, 7];
arr = pull(arr, -1);

console.log(arr.join(':'));
// 5:7:8:7

// passes the SameValue test
console.log(pull([-0, 0], 0).join(':'));
// 0
console.log(pull([NaN, 5, NaN], NaN).join(':'));
// 5

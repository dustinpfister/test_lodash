let some = function (col, tester) {
    let i = 0,
    keys = Object.keys(col),
    len = keys.length;
    while (i < len) {
        if (tester(col[keys[i]], keys[i], i)) {
            return true;
        }
        i += 1;
    }
    return false;
};

// works with arrays
let arr = [null, 'foo', 'baz', 42, {}, false, true];
console.log(some(arr, function (el) {
        return typeof el === 'number';
    })); // true
console.log(some(arr, function (el) {
        return typeof el > 50
    })); // false

// works with objects in general
let obj = {
    x: 42,
    y: 17,
    z: -12
};

console.log(some(obj, function (n) {
        return n > 50 || n < -50
    })); // false
console.log(some(obj, function (n) {
        return n <0
    })); // true

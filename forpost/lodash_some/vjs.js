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

let arr = [null, 'foo', 'baz', 42, {}, false, true];

console.log( some(arr, function (el) {
    return typeof el === 'number';
}) );

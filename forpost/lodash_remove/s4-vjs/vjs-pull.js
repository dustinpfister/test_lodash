var remove = function (arr, func) {
    return arr.filter(function (el, i) {
        if (func.call(arr, el, i, arr)) {
            arr.splice(i, 1);
            return true;
        }
        return false;
    });
};
var pull = function (arr, value) {
    return remove(arr, function (el) {
        return Object.is(el, value);
    });
};

// testing this out
var a = [1, 'foo', 2, 'bar', 3, 'baz'];
var b = pull(a, 'foo');
console.log(a);
//[ 1, 2, 'bar', 3, 'baz' ]
console.log(b)
// [ 'foo' ]
var remove = function (arr, func) {
    return arr.filter(function (el, i) {
        if (func.call(arr, el, i, arr)) {
            arr.splice(i, 1);
            return true;
        }
        return false;
    });
};

// testing this out
var a = [1, 'foo', 2, 'bar', 3, 'baz'];
var b = remove(a, function (el) {
        return typeof el === 'string';
    });

// mutates the source array in place, and the 
// return value is the elements that where removed
console.log(a);
//[ 1, 2, 3 ]
console.log(b);
// [ 'foo', 'bar', 'baz' ]

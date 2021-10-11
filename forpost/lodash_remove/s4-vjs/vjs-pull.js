// the remove method
var remove = function (arr, func) {
    return arr.filter(function (el, i) {
        if (func.call(arr, el, i, arr)) {
            arr.splice(i, 1);
            return true;
        }
        return false;
    });
};

// Object.is polly fill
if (!Object.is) {
  Object.defineProperty(Object, "is", {
    value: function (x, y) {
      // SameValue algorithm
      if (x === y) {
        // return true if x and y are not 0, OR
        // if x and y are both 0 of the same sign.
        // This checks for cases 1 and 2 above.
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // return true if both x AND y evaluate to NaN.
        // The only possibility for a variable to not be strictly equal to itself
        // is when that variable evaluates to NaN (example: Number.NaN, 0/0, NaN).
        // This checks for case 3.
        return x !== x && y !== y;
      }
    }
  });
}

// a pull method using Object.is in place of lodash _.eq
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
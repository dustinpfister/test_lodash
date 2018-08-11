
let an = 1503345;

var padStart = function (len, filler) {

    var fill = '',
    toFill = 0;

    len = len || 0;
    filler = String(filler === undefined ? ' ' : filler);
    toFill = len - String(this).length;

    if (toFill > 0) {

        fill = Array.apply(null, Array(toFill)).map(String.prototype.valueOf, filler).join('');

    }

    return fill + this;

};

console.log(padStart.call(String(an), 10, 0)); // '0001503345'


Array.prototype.map = Array.prototype.map || function (callback /*, thisArg*/) {
    var T,A,k,O,len,kValue,mappedValue;
    if (this == null) {
        throw new TypeError('this is null or not defined');
    }
    O = Object(this);
    len = O.length >>> 0;
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    if (arguments.length > 1) {
        T = arguments[1];
    }
    A = new Array(len);
    k = 0;
    while (k < len) {
        if (k in O) {
            kValue = O[k];
            mappedValue = callback.call(T, kValue, k, O);
            A[k] = mappedValue;
        }
        k++;
    }
    return A;
};

// monkey patch it with the pollyfill
String.prototype.padStart = String.prototype.padStart || function (len, filler) {

    var fill = '',
    toFill = 0;

    len = len || 0;
    filler = String(filler === undefined ? ' ' : filler);
    toFill = len - String(this).length;

    if (toFill > 0) {

        fill = Array.apply(null, Array(toFill)).map(String.prototype.valueOf, filler).join('');

    }

    return fill + this;

};

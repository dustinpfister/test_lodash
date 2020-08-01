let _ = require('lodash');

let obj = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
};

Number.isInteger = Number.isInteger || function (value) {
    return typeof value === 'number' &&
    isFinite(value) &&
    Math.floor(value) === value;
};

let isArrayLike = function (obj) {

    // is it an object
    if (typeof a != 'object' || a === null) {
        return false;
    }

    // does it have a length property
    if (a.length === undefined) {
        return false;
    }

    // is length a number? is it an Integer?
    // is it greater than 0 and less then or equal to MAX_SAFE_INTEGER
    if (typeof a.length === 'number') {
        if (a.isInteger(a) && a > 0 && a <= Number.MAX_SAFE_INTEGER) {
            // then it is array like
            return true;
        }
    }

    // if we get here it is not array like
    return false;

};

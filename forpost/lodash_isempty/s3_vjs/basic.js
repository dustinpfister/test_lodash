let isEmpty = (obj) => {
    if (typeof obj === 'object' && obj != null) {
        return Object.keys(obj).length >= 1 ? false : true;
    }
    return true;
};

// Is empty can be used with Object Collections
console.log(isEmpty({})); // true
console.log(isEmpty({x: 42})); // false

// and Array Object Collections
console.log(isEmpty([])); // true
console.log(isEmpty([12, 42, 87])); // false


// Booleans
console.log( isEmpty(true) ); // true
console.log( isEmpty(false) ); // true
console.log( isEmpty(123) ); // true
console.log( isEmpty(0) ); // true
console.log( isEmpty(-123) ); // true
console.log( isEmpty(NaN) ); // true
console.log( isEmpty(Infinity) ); // true
console.log( isEmpty('') ); // true
console.log( isEmpty('foo') ); // false
console.log( isEmpty(null) ); // true
console.log( isEmpty(undefined) ); // true
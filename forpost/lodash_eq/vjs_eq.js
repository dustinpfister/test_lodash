
let eq = (a, b) => {
    if (a.toString() === 'NaN' || b.toString() === 'NaN') {
        return true;
    }
    return a === b;
};

console.log( eq(NaN , NaN) ); // true

let _ = require('lodash');

let round = (n, d) => {
    d = d === undefined ? 2 : d;
    return parseFloat( n.toFixed(d) );
};

console.log( round(3.12345678, 4) ); // 3.1235
console.log( round(3.12345678) );    // 3.12
console.log( round(3.12345678, 0) ); // 3

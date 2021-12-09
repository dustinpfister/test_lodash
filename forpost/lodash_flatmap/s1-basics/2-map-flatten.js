let _ = require('lodash');

let fromRed = (r) => {
    let g = 128 + Math.floor(r / 255) * 64,
    b = 255 - r;
    return [r, g, b];
}

// the same result can be achieved by chaining with
// lodash map and lodash flatten
let flat = _([0,255]).map(fromRed).flatten().value()
console.log(flat);
// [ 0, 128, 255, 255, 192, 0 ]
let _ = require('lodash');

let fromRed = (r) => {
    let g = 128 + Math.floor(r / 255) * 64,
    b = 255 - r;
    return [r, g, b];
}
let notFlat = _.map([0,255], fromRed);
let flat = _.flatMap([0, 255], fromRed);
console.log(notFlat);
// [ [ 0, 128, 255 ], [ 255, 192, 0 ] ]
console.log(flat);
// [ 0, 128, 255, 255, 192, 0 ]
let fromRed = (r) => {
    let g = 128 + Math.floor(r / 255) * 64,
    b = 255 - r;
    return [r, g, b];
};
// Using array map to create an array of arrays
let a = [0, 255].map(fromRed);
console.log(a);
// [ [ 0, 128, 255 ], [ 255, 192, 0 ] ]
// now using reduce and concat methods to flatten
let flat = a.reduce((acc, val) => acc.concat(val));
console.log(flat);
// [ 0, 128, 255, 255, 192, 0 ]


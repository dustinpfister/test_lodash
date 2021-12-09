let fromRed = (r) => {
    let g = 128 + Math.floor(r / 255) * 64,
    b = 255 - r;
    return [r, g, b];
};

// array map, reduce, and concat is one option
let a = [0, 255].map(fromRed);
console.log(a);
// [ [ 0, 128, 255 ], [ 255, 192, 0 ] ]
let flat = a.reduce((acc, val) => acc.concat(val));
console.log(flat);
// [ 0, 128, 255, 255, 192, 0 ]


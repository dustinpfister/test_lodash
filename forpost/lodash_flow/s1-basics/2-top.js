let _ = require('lodash');

let func1 = (a) => {
    return _(a)
    .chunk(3)
    .map((row, y) => {
        return row.map((n, x, col)=>{
            return {
                x: x,
                y: y,
                i: y * 3 + x,
                n: n
            };
        })
    })
    .flatten()
    .value();
};
// demo
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(func1(a));
/*
[ 
  { x: 0, y: 0, i: 0, n: 1 },
  { x: 1, y: 0, i: 1, n: 2 },
  { x: 2, y: 0, i: 2, n: 3 },
  { x: 0, y: 1, i: 3, n: 4 },
  { x: 1, y: 1, i: 4, n: 5 },
  { x: 2, y: 1, i: 5, n: 6 },
  { x: 0, y: 2, i: 6, n: 7 },
  { x: 1, y: 2, i: 7, n: 8 },
  { x: 2, y: 2, i: 8, n: 9 }
]
*/

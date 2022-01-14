let _ = require('lodash');
 
let a = {
    0: 1,
    1: 2,
    2: 3
};

_.forEach(a, (n, key)=>{
    console.log( Math.pow(2, n) );
});
// 2
// 4
// 8

let _ = require('lodash');


let a = [1,2,3,4,5]
// using tap with lodash chain, and map
let b = _.chain(a)
.map((n)=>{
    return Math.pow(n, 2);
})
.tap((a)=>{
    a[3] = 0;
})
.value();
console.log(b);
//[ 1, 4, 9, 0, 25 ]
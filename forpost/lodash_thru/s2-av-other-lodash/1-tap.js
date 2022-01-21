let _ = require('lodash');

let a = _.chain('01234')
.tap((x)=>{
    console.log(x); // '01234'
})
.split('')
.tap((x)=>{
    console.log(x); // [ '0', '1', '2', '3', '4' ]
})
.map((n)=>{
    return Math.pow(2, n);
})
.value();
 
console.log(a); // [ 1, 2, 4, 8, 16 ]
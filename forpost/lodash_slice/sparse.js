let _ = require('lodash');

// a sparse array 'a'
let a =  new Array(5);

// creating 'b' from 'a' with lodash slice
// and creating 'c' from 'a' with Array slice
let b = _.slice(a, 1, 3);
let c = a.slice(1, 3);

// simple map method
let maper = (x, i)=>{
  return i;
}
// using the same native Array.map on both results with the same mapper
console.log(b.map(maper)); // [0, 1]
console.log(c.map(maper)); // [ <2 empty items> ]
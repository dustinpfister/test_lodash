// two arrays
let a = [1,2,3];
let b = [4,5,6];
// using Array.join, and String.split
let c = ( a.join(',') + ',' + b.join(',') ).split(',');
console.log(c);
// [ '1', '2', '3', '4', '5', '6' ]

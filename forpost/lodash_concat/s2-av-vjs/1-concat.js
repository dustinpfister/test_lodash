let start = [1, 2, 3],
mid = [4, 5, 6],
end = [7, 8, 9];
 
// from an empty array
let full = [].concat(start, mid, end);
console.log(full); // [1,2,3,4,5,6,7,8,9]
 
// or an existing one
console.log( ['a','b','c'].concat(['d','e','f']) ); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
 
// with call
console.log(Array.prototype.concat.call( ['a','b'],['c','d'] )); [ 'a', 'b', 'c', 'd' ];
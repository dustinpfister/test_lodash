var a = [1, 'a', 'b', 4, 5, 'c'];
// what is nice about slice is that it does not mutate the source array
var b = a.slice(1, 3);
console.log(b);
// [ 'a', 'b' ]
console.log(a);
// [ 1, 'a', 'b', 4, 5, 'c' ]
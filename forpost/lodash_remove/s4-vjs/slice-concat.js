var a = [1, 'a', 'b', 4, 5, 'c'];
// what is nice about slice is that it does not mutate the source array
var b = a.slice(1, 3).concat(a.slice(5, 6));
console.log(b);
// [ 'a', 'b', 'c' ]
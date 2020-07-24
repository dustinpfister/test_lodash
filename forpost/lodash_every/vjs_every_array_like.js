
let arrLike = {
    0 : 7,
    1 : 8,
    2 : 'nope',
    length: 3
},
tester = (el) => {
    return typeof el === 'number';
};

console.log([].every.call(arrLike, tester)); // false
arrLike[2] = 9;
console.log([].every.call(arrLike, tester)); // true
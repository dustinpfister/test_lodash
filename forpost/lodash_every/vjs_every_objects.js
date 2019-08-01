let items = {
    apple: {cost: 2},
    raspberry: {cost: 5},
    blackberry: {cost: 4}
};
let hasCost = (item) => {
    if (typeof item === 'object') {
        if (item === null) {return false;}
        if (typeof item.cost === 'number' && item.cost >= 0) {
            return true;
        }
    }
    return false;
};
// does not seem to work as expected with my items
// object
console.log([].every.call(items, hasCost)); // true
items.fooberry = null;
console.log([].every.call(items, hasCost)); // true

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
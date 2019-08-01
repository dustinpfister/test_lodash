let items = {
    apple: {cost: 2},
    raspberry: {cost: 5},
    blackberry: {cost: 4}
};
let hasCost = function (item) {
    if (typeof item === 'object') {
        if (item === null) {return false;}
        if (typeof item.cost === 'number' && item.cost >= 0) {
            return true;
        }
    }
    return false;
};
// seems to work okay for me at least when used with Function.call
console.log([].every.call(items, hasCost)); // true

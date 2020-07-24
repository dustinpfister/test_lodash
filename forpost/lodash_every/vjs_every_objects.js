let items = {
    apple: {cost: 2},
    raspberry: {cost: 5},
    fooberry: null,
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
// call will not work with this kind of object becuase they are named
// key values
console.log([].every.call(items, hasCost)); // true


console.log(Object.values(items).every(hasCost)); // true

let _ = require('lodash');
// a plan old object that is
// a collection of sorts
let items = {
    apple: {
        cost: 2
    },
    raspberry: {
        cost: 5
    },
    blackberry: {
        cost: 4
    }
};
// a method to check each key in the object
let hasCost = function (item) {
    // is item an object?
    if (typeof item === 'object') {
        // false if null
        if (item === null) {
            return false;
        }
        // Some rules for a cost property
        if (typeof item.cost === 'number' && item.cost >= 0) {
            return true;
        }
    }
    // if we get here yeah false
    return false;
};

// Evey can be used to check that every item
// meets the given set of conditions
console.log(_.every(items, hasCost)); // true
items.newProduct = null;
console.log(_.every(items, hasCost)); // false

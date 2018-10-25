let _ = require('lodash');

let units = [{
        type: 'a',
        price: 10
    }, {
        type: 'b',
        price: 12
    }, {
        type: 'a',
        price: 9
    }
];

let counts = {
    a: 0,
    b: 0
};
let keyed = _.keyBy(units, function (unit) {
        counts[unit.type] += 1;
        return unit.type + counts[unit.type];
    });

console.log(keyed.a1.price); // 10

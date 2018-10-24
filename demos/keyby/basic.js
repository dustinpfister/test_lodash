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

let obj = _.keyBy(units, function (unit) {
        return unit.type;
    });

console.log(obj);

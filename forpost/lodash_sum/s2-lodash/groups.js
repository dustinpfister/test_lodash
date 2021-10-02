let _ = require('lodash');

let stores = [{
        store: '1',
        money: 50
    }, {
        store: '1',
        money: 100
    }, {
        store: '2',
        money: 200
    },

];

let summed = _(stores)
.groupBy('store')
.map((objs, key) => {
    return {
        'store': key,
        'money': _.sumBy(objs, 'money')
    }
})
.value();

console.log(summed);
// [ { store: '1', money: 150 }, { store: '2', money: 200 } ]

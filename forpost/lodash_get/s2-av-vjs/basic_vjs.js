let _ = require('lodash');

let enemy = {

    // enemy health
    health: {
        current: 80,
        max: 100,
        healRate: {
            active: false,
            perTick: 5
        }
    },

    // index values of targets
    targets: [2, 6, 8]

};

var getByPath = function (obj, path, def) {

    var levels = path.split('.');

    levels.forEach(function (level,i) {
        obj = obj[level];
    });

    if (obj === undefined) {

        return def;

    }

    return obj;

};

console.log(getByPath(enemy, 'health.healRate.active')); // false

console.log(getByPath(enemy, 'health.overTime',{amount:0,ticks:0})); // { amount: 0, ticks: 0 }

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

function getByPath(obj, path, def) {

    path = path
        .replace(/\[/g, '.')
        .replace(/]/g, '')
        .split('.');

    path.forEach(function (level) {
        obj = obj[level];
    });

    if (obj === undefined) {
        return def;
    }

    return obj;

};

console.log(getByPath(enemy, 'targets[1]')); // 6

console.log(getByPath(enemy, 'health.overTime', {
        amount: 0,
        ticks: 0
    })); // { amount: 0, ticks: 0 }

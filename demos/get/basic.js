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

console.log(_.get(enemy, 'health.healRate.active')); // false

console.log(_.get(enemy, 'targets[2]')); // 8

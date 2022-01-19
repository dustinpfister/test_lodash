let _ = require('lodash');

// enemy defaults
let enemyDefaults = {

    // dead on not healing
    health: {
        current: 0,
        max: 100,
        heal: {
            perTick: {
                active: false,
                amount: 0

            },
            overTime: {
                amount: 0,
                ticks: 0
            }
        }
    },

    // no targets
    targets: []

};

// enemy example 1
let enemy1 = {
    // enemy health
    health: {
        current: 80,
        max: 100,
        heal: {
            perTick: {
                active: false,
                amount: 5
            },
            overTime: {
                amount: 1,
                ticks: 15
            }
        }
    },
    // index values of targets
    targets: [2, 6, 8]
};

// enemy example 2
let enemy2 = {
    // enemy health
    health: {
        current: 80,
        heal: {
            active: false,
            perTick: 5
        }
    }
};

var path = 'health.heal.overTime',
defaultValue = _.get(enemyDefaults, path);

console.log(_.get(enemy1, path, defaultValue));
console.log(_.get(enemy2, path, defaultValue));

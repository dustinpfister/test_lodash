let _ = require('lodash');

var getHealth = _.property('hp.current'),
monster = {
    hp : {
        current : 37,
        max: 80,
        healPerTick: 0,
        hurtPerTick: 0
    },
    attack: 4
};
 
console.log( getHealth(monster) ); // 37
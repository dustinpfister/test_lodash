let _ = require('lodash');

var monster = {
    hp : {
        current : 37,
        max: 80,
        healPerTick: 0,
        hurtPerTick: 0
    },
    attack: 4
};

// using lodash _.get
var hp = _.get(monster, 'hp.current');
console.log(hp); // 37

// using a variable
hp = monster.hp.current;
console.log(hp); // 37

// using with statement
with(monster.hp) {
  console.log( current ); // 37
}
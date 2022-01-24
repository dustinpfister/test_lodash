let _ = require('lodash');

var obj = {
    player: {
        team: 'GoodGuys',
        hp: 12,
        hpMax: 100,
        heal: false
    },
    enemies: [{
            team: 'BadGuys',
            hp: 90,
            hpMax: 250,
            heal: true
        }, {
            team: 'BadGuys',
            hp: 120,
            hpMax: 250,
            heal: true
        }
    ]
};
 
var toggleHeal = function (item) {
    if (typeof item != 'object') {
        return item;
    } else {
        if (_.isArray(item)) {
            return _.map(item, toggleHeal);
        }
        item.heal = !item.heal;
    }
    return item
 
};

var toggled = _.flatten(_.map(obj, toggleHeal));
console.log(toggled);
// [
//     {team: "GoodGuys", hp: 12, hpMax: 100, heal: true},
//     {team: "BadGuys", hp: 90, hpMax: 250, heal: false},
//     {team: "BadGuys", hp: 120, hpMax: 250, heal: false}
// ]
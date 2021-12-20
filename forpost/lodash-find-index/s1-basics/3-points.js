const _ = require('lodash');

// get index by points range
const getIndexByPointsRange = (users, pointsMin, pointsMax) => {
    return _.findIndex(users, (obj) => {
        return obj.points >= pointsMin && obj.points <= pointsMax;
    });
};
// demo
let users = [
    { name: 'Jerry', points: 300},
    { name: 'John', points: 1200},
    { name: 'Bill', points: 935}
];
console.log( getIndexByPointsRange(users, 900, 1000) );      // 2
console.log( getIndexByPointsRange(users, 900, Infinity) );  // 1
console.log( getIndexByPointsRange(users, 2000, Infinity) ); // -1



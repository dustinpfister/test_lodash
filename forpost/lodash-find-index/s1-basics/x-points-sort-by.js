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
    { name: 'John', points: 550},
    { name: 'Mark', points: 35},
    { name: 'Bill', points: 935}
];


let sortedUsers = _.chain(users).sortBy(users, ['name']).value();
console.log(sortedUsers);


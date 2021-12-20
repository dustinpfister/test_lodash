const _ = require('lodash');

// get index by name
const getIndexByName = (users, name) => {
    return _.findIndex(users, (el) => {
        return el === name;
    });
};

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

// if I just get by point range it will just get the first element
// but maybe not the best of the array is not sorted first.
console.log( getIndexByPointsRange(users, 500, 1000) ); // 1
// So then there is creating a new sorted array with lodash chain, sort by, and reverse
let sortedUsers = _.chain(users).sortBy((obj)=>{ return obj.points}).reverse().value();
// If I use the getIndexByPoints method now with the sorted array I get an index
// that is a higher value, but the index value is relative to the new sorted array rather than
// the original source array users
let si = getIndexByPointsRange(sortedUsers, 500, 1000);
console.log(si) // 0
// But I can use the find index method again with the sorted object to get that index
console.log( _.findIndex(users, sortedUsers[si]) ); // 3

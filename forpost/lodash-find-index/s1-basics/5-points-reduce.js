const _ = require('lodash');

// get index by points range
const getIndexValuesByPoints = (users, pointsMin, pointsMax) => {
    return _.reduce(users, (acc, obj, index) => {
        if(obj.points >= pointsMin && obj.points <= pointsMax){
            acc.push(index);
        }
        return acc;
    }, []);
};
// demo
let users = [
    { name: 'Jerry', points: 300},
    { name: 'John', points: 550},
    { name: 'Mark', points: 35},
    { name: 'Bill', points: 935}
];


console.log( getIndexValuesByPoints(users, 500, 1000) );

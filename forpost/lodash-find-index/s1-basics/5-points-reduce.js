const _ = require('lodash');

// get index by points range
const getIndexValuesByPoints = (users, pointsMin, pointsMax) => {
    return _.chain(users)
    .reduce((acc, obj, index) => {
        if(obj.points >= pointsMin && obj.points <= pointsMax){
            acc.push({index: index, points: obj.points});
        }
        return acc;
    }, [])
    .sortBy((obj)=>{
        return obj.points
    })
    .reverse()
    .map((obj)=>{
        return obj.index;
    })
    .value();
};
// demo
let users = [
    { name: 'Jerry', points: 300},
    { name: 'John', points: 550},
    { name: 'Mark', points: 35},
    { name: 'Bill', points: 935}
];
console.log( getIndexValuesByPoints(users, 500, 1000) ); // [ 3, 1 ]

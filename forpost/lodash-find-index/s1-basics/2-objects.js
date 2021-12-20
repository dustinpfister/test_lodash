const _ = require('lodash');

// get index by name
const getIndexByName = (users, name) => {
    return _.findIndex(users, {name: name});
};
// demo
let users = [
    { name: 'John', points: 1200},
    { name: 'Jerry', points: 300}, 
    { name: 'Bill', points: 935}
];
// find bill using the _.matches shorthand
console.log( getIndexByName(users, 'Bill') ); // 2

const _ = require('lodash');

let users = [
    { name: 'John', points: 1200},
    { name: 'Jerry', points: 300}, 
    { name: 'bill', points: 935}
];
// find bill using the _.matches shorthand
console.log(_.findIndex(users, {name: 'bill'})); // 2
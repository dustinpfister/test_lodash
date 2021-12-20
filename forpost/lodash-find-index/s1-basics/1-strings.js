const _ = require('lodash');
// get index by name
const getIndexByName = (users, name) => {
    return _.findIndex(users, (el) => {
        return el === name;
    });
};
// demo
let users = ['John', 'Jerry', 'Bill'];
console.log( getIndexByName(users, 'Bill') ); // 2
console.log( getIndexByName(users, 'Mark') ); // -1
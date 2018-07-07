let _ = require('lodash');

let days = [
    {
        date: '10/12/17',
        users: 130,
        sales: 1
    }, {
        date: '1/1/17',
        users: 10,
        sales: 0
    }, {
        date: '2/5/18',
        users: 430,
        sales: 3
    }, {
        date: '5/4/17',
        users: 37,
        sales: 0
    }
];

let byUsers = _.sortBy(days, 'users');

console.log(byUsers);
/*
[ { date: '1/1/17', users: 10, sales: 0 },
  { date: '5/4/17', users: 37, sales: 0 },
  { date: '10/12/17', users: 130, sales: 1 },
  { date: '2/5/18', users: 430, sales: 3 } ]
*/

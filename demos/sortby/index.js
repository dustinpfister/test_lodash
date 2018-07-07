let _ = require('lodash');

let days = [{
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

console.log('by users: ');
console.log(byUsers);
/*
[ { date: '1/1/17', users: 10, sales: 0 },{ date: '5/4/17', users: 37, sales: 0 },{ date: '10/12/17', users: 130, sales: 1 },{ date: '2/5/18', users: 430, sales: 3 } ]
 */

let byDate = _.sortBy(days, function (day) {

        // convert to jsDate
        let d = day.date.split('/'),
        date = new Date('20' + d[2], d[0] - 1, d[1]);

        // and sort by getTime
        return date.getTime();
    });

console.log('by date (getTime): ');
console.log(byDate);

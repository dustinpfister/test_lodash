let _ = require('lodash');

let day = {
    date: '1/2/17',
    users: 10,
    pageviews: 13,
    pages: [{
            path: '/2017/01/01/hello/',
            users: 3,
            pageviews: 4
        }, {
            path: '/2017/01/02/hello-again/',
            users: 7,
            pageviews: 9
        }

    ]
};

let custom = _.pick(day, ['date','users','pages']);

// what is returned is a shallow clone
day.users += 50;
console.log(day.users); // 53
console.log(custom.users); // 53

// but not a deep clone
day.pages[0].users += 50;
console.log(day.pages[0].users); // 53
console.log(custom.pages[0].users); // 53


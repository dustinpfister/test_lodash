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



let custom = _.pick(_.cloneDeep(day), ['date','pages']);

day.pages[0].users += 50;

console.log(day.pages[0].users); // 53
console.log(custom.pages[0].users); // 3


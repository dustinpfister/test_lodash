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

// a function that I can use with call.
let pick = function (props) {

    let oldObj = this,
    keys = Object.keys(oldObj),
    newObj = {};

    // for all keys in old object
    keys.forEach(function (key) {

        let i = 0,
        len = props.length;

        // check if key is in props array
        while (i < len) {

            // if so ref it in
            if (key === props[i]) {

                newObj[key] = oldObj[key];
                break;

            }

            i += 1;

        }

    });

    return newObj;

};

console.log(pick.call(day, ['date', 'users']));

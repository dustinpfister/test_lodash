let _ = require('lodash');

let arr = [{
        username: 'john',
        score: 37
    }, {
        username: 'jake',
        score: 67
    }, {
        username: 'bill',
        score: 20
    }
];

let obj = _.countBy(arr, (rec) => {
        return rec.score >= 65 ? 'pass': 'fail';
    });
console.log(obj);
// { fail: 2, pass: 1 }
let _ = require('lodash');

let scores = [{
        name: 'Math',
        score: 83
    }, {
        name: 'Programing',
        score: 100
    }, {
        name: 'PE',
        score: 72
    }, {
        name: 'English',
        score: 42
    }, {
        name: 'Bio',
        score: 58
    }
];

let byFail = _.groupBy(scores, function (sub) {
        if (sub.score < 65) {

            return 'fail';
        }
        return 'pass';
    });

// so now I have an object with pass, and fail keys
_.each(byFail.pass, function (sub) {

    console.log(sub.name); //Math, Programing, PE

})

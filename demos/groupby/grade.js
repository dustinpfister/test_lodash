let _ = require('lodash');

let clases = [
    {name: 'Math',score: 83},
    {name: 'Programing',score: 100},
    {name: 'Art',score: 98}, {name: 'PE',score: 93},
    {name: 'English',score: 42},
    {name: 'Bio',score: 60}
];

// grade method that uses _.groupBy
let grade = function (clases) {

    let letters = {
        'A+': 98,
        'A.': 93,
        'A-': 90,
        'B+': 86,
        'B.': 83,
        'B-': 80,
        'C+': 76,
        'C.': 73,
        'C-': 70,
        'D+': 66,
        'D.': 63,
        'D-': 60
    };

    return _.groupBy(clases, function (sub) {

        // default to an F
        let key = 'F.';

        _.forEach(letters, function (g, letter) {

            if (sub.score >= g) {

                key = letter;
                return false;

            }

        });

        return key;

    });

};

console.log(grade(clases));

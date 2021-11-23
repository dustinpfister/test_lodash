let _ = require('lodash');

let clases = [
    {name: 'Math',grade: 83},
    {name: 'Programing',grade: 100},
    {name: 'Art',grade: 98}, 
    {name: 'PE',grade: 93},
    {name: 'English',grade: 42},
    {name: 'Bio',grade: 60}
];

// grade method that uses _.groupBy
let gradeClases = function (clases) {

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

            if (sub.grade >= g) {

                key = letter;
                return false;

            }

        });

        return key;

    });

};

console.log(gradeClases(clases));

//{ 'B.': [ { name: 'Math', grade: 83 } ],
//  'A+': [ { name: 'Programing', grade: 100 },{ name: 'Art', grade: 98 } ],
//  'A.': [ { name: 'PE', grade: 93 } ],
//  'F.': [ { name: 'English', grade: 42 } ],
//  'D-': [ { name: 'Bio', grade: 60 } ] }

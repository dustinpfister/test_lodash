let _ = require('lodash');

let data = [2, 4, 6, 8, 9],
kill = [4, 8];

let result = _.filter(data, function (n) {
        return !_.some(kill, function (kn) {
            return kn === n;
        });
    });

console.log(result); // [2,6,9]

let result_diff = _.difference(data,kill);

console.log(result_diff); // [2,6,9]

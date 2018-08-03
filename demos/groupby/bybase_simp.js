let _ = require('lodash');

let byBase = function (collection, bases) {

    return _.groupBy(collection, function (n) {

        let b = -1;

        // group by first base that is found in bases
        _.forEach(bases, function (base) {

            let log = _.round(Math.log(n) / Math.log(base), 4);

            if (String(log).indexOf('.') === -1) {

                b = base;
                // returning false will break _.forEach
                return false;

            }

        });

        // if the base is not -1, group by base
        if (b != -1) {

            return b;

        }

        // else group it under the key 'none'
        return 'none';

    });

};

let nums = [27,9,256,49,2,16,42,3,1024,20];

console.log(byBase(nums, [2, 3, 7]));

//{ '2': [ 256, 2, 16, 1024 ],
//  '3': [ 27, 9, 3 ],
//  '7': [ 49 ],
//  none: [ 42, 20 ] }

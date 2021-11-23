let _ = require('lodash');

let byBase = function (collection, bases) {

    if (!collection || bases === undefined) {

        return {};

    }

    bases = typeof bases === 'string' ? Number(bases) : bases;
    bases = typeof bases === 'number' ? [].push(bases) : bases;

    return _.groupBy(collection, function (n) {

        let b = -1;

        if (typeof n === 'boolean') {return 'none';}

        // make sure they type if Number
        n = Number(n);

        // group to 'none' if NaN
        if (_.isNaN(n)) {
            return 'none';
        }

        // group by first base that is found in bases
        _.forEach(bases, function (base) {

            let log = _.round(Math.log(n) / Math.log(base), 4);

            console.log(n, base, log);

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

let nums = [2, 49, 20, 4, true, , false, 3, 7, 8, undefined, 32, 'what me worry?', 42, 27, 343, 256];

console.log(byBase(nums, [2, 3, 7]))

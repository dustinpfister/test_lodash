let _ = require('lodash');

// process all kinds of stuff that can be in my example object
let process = function (val) {

    // return 0 for null
    if (val === null)
        return 0;

    // if a Number
    if (typeof val === 'number') {

        // return 0 for NaN
        if (_.isNaN(val)) {

            return 0;

        }

        return val;

    }

    if (typeof val === 'function') {

        return val() || 0;

    }

    if (typeof val === 'object') {

        if (val.constructor.name === 'Array') {

            //
            return _.reduce(val, function (sum, val) {

                sum = process(sum);

                return sum + process(val);
            })

        }

    }

    return 0;

};

let obj = {
    a: [1, 1], // array of numbers
    b: 1, // just a number
    c: null, // a null value
    d: () => {
        return 1 + 1 // a function that returns a number
    },
    e: false,
    f: NaN,
    g: [[1, [1, 1], 1], [() => {return Math.pow(2, 5)}, 1,]] // nested arrays with more stuff
}

let sum = _.reduce(obj, function (sum, val, key, obj) {

        sum = process(sum);

        return sum + process(val);

    });

console.log(sum); // 42

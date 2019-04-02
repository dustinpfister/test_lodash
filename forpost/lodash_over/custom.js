let _ = require('lodash');

let pow2n4 = _.over([function (n) {
                let nums = [],
                len = arguments.length,
                i = 0;
                while (i < len) {
                    nums.push(Math.pow(2, arguments[i]))
                    i += 1;
                }
                return nums;
            },
            function (n) {

                return Math.pow(4, n)

            }
        ]);

console.log(pow2n4(2, 4))

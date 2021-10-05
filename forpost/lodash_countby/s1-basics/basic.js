let _ = require('lodash');

let arr = [{
        username: 'john',
        score: 37
    }, {
        username: 'jake',
        score: 50

    }, {
        username: 'bill',
        score: 20
    }
];

let obj = _.countBy(arr, (rec) => {
        return rec.score >= 50;
    });

console.log(obj.false); // 2
console.log(obj.true); // 1
console.log(_.countBy(['foo', 'man', 'chew','happy','bar'], 'length'));
 // {3: 3, 4: 1, 5: 1}

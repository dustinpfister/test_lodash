let _ = require('lodash');

let arr = [
    { username: 'john', score: 37},
    { username: 'jake', score: 67},
    { username: 'bill', score: 20}
];

let func = (rec) => {
    return rec.score >= 65 ? 'pass' : 'fail';
};

console.log( _.keyBy(arr, func) );
console.log( _.groupBy(arr, func) );
console.log( _.countBy(arr, func) );



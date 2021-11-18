let _ = require('lodash');
let a = [1, false, NaN, '2', 'ahh!', 3, {}, '4'];

let i = a.length, sum = 0;
while (i--) {
    let el = a[i],
    n = 0;
    if (typeof el === 'string') {
        n = parseInt(el);
        n = 'NaN' === String(n) ? 0 : n;
    }
    if (typeof el === 'number' && 'NaN' != String(el)) {
        n = el;
    }
    sum += n;
}
console.log(sum); // 10


sum = _.sum(a);
console.log(sum); // 10

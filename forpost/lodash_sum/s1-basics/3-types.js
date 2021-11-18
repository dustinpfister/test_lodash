let _ = require('lodash');
let parseElement = (el) => {
    let n = 0;
    if (typeof el === 'string') {
        n = parseInt(el);
        n = 'NaN' === String(n) ? 0 : n;
    }
    if (typeof el === 'number' && 'NaN' != String(el)) {
        n = el;
    }
    return n;
};

let a = [1, false, NaN, '2', 'ahh!', 3, {}, '4'];
// using a while loop
let i = a.length, sum = 0;
while (i--) {
    sum += parseElement(a[i]);
}
console.log(sum); // 10

// using lodash
sum = _(a).map(parseElement).sum();
console.log(sum); // 10

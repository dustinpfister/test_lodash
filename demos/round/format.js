let _ = require('lodash');

let money = 86.5733333333; // must be formated as '$0086.57'

let formatMoney = function (money) {

    let rounded = _.round(money, 2),
    sp = _.split(rounded, '.');

    if (sp.length === 1) {

        sp.push('00');

    }

    sp[0] =  _.clamp(sp[0], 0,9999);

    sp[0] = _.padStart(sp[0], 4, '0');
    sp[1] = _.padEnd(sp[1], 2, '0');

    return '$' + sp.join('.');

};

console.log(formatMoney(money)); // '$0086.57'
console.log(formatMoney(0)); // $0000.00
console.log(formatMoney(7)); // $0007.00
console.log(formatMoney(.1)); // $0000.10

console.log(formatMoney(99000)); // $9999.00
console.log(formatMoney(-12)); // $0000.00

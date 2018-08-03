let _ = require('lodash');

let money = 86.5733333333; // must be formated as '$0086.57'

let formatMoney = function (money) {

    // round with precision of 2, and split ( 1.23 becomes [1,23] )
    let sp = _.split(_.round(money, 2), '.');

    // push a 0 element for cents if there is only a dollar element
    // ( [7] becomes [ 7, 0] )
    if (sp.length === 1) {sp.push(0);}

    // lodash has methods for clamping and padding
    // [-12,0] becomes [0,0]
    // and ( [7,0] becomes ['0007','00'])
    sp[0] =  _.clamp(sp[0], 0,9999);
    sp[0] = _.padStart(sp[0], 4, '0');
    sp[1] = _.padEnd(sp[1], 2, '0');

    // join array elements together with a '.' between them
    // and format the final string
    // ['1234','12'] becomes '$1234.12'
    return '$' + _.join(sp, '.');

};

console.log(formatMoney(money)); // '$0086.57'
console.log(formatMoney(0)); // $0000.00
console.log(formatMoney(7)); // $0007.00
console.log(formatMoney(.1)); // $0000.10
console.log(formatMoney(99000)); // $9999.00
console.log(formatMoney(-12)); // $0000.00

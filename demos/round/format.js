let _ = require('lodash');

let money = 86.5733333333; // must be formated as '$0086.57'

let formatMoney = function (money) {

    return '$' + _.padStart(_.round(money, 2), 7,'0');

};

console.log(formatMoney(money));

let _ = require('lodash');

let strP = '<p>this is an element</p>';

let strS = _.replace(strP,/p>/g,'span>');

console.log(strS); '<span>this is an element</span>'

let _ = require('lodash');

let strP = '<p>this is an element</p>';

let strS = _.replace(strP,'p>','span>');

console.log(strS);

let _ = require('lodash');


var css = 'color:red;font-size:12pt;font-family:arial;';

var props = _.split(css,';',2);

console.log(props);
// [ 'color:red', 'font-size:12pt' ]

let _ = require('lodash');


let css = 'color:red;font-size:12pt;font-family:arial;';

let props = _.split(css,';',2);

console.log(props);
// [ 'color:red', 'font-size:12pt' ]

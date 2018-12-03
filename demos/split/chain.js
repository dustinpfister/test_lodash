let _ = require('lodash');

let css = 'color:red;font-size:12pt;font-family:arial;';

let arr = _.chain(css)
.split(';')
.join(':')
.split(':')
.value();

console.log(arr);

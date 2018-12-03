let _ = require('lodash');

var css = 'color:red;font-size:12pt;font-family:arial;';

var toArr = _.flow([
    function (css) {
        return _.split(css, ';')
    }
]);

console.log(toArr(css));

let _ = require('lodash');
 
let css = 'color:red;font-size:12pt;font-family:arial;';
 
let toArr = _.flow([
    (css) => {
        return _.split(css, ';')
    },
    (arr) => {
        return _.compact(arr);
    },
    (arr) => {
        return _.map(arr, (str) =>{
            return _.split(str, ':');
        })
    }
]);
 
console.log(toArr(css));
// [['color', 'red'], ['font-size', '12pt'], ['font-family', 'arial']]

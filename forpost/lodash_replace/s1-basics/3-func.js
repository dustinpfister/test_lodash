let _ = require('lodash');

let source = 'This {98} string has some {123} patterns with numbers {56} ';

let b = _.replace(source, /\{\d+\}/g, (a)=>{
    return _.chain(a).split('').map((el)=>{
        return el === '{' || el === '}' ? '' : Math.pow(2, parseInt(el)) + '-';
    }).join('').value();
});
console.log(b);
// 'This 512-256- string has some 2-4-8- patterns with numbers 32-64-'

let _ = require('lodash');

let a = {
    foo: 'a',
    bar: 'b',
    baz: 'c'
};
_.forEach(a, function(el,index,arr){
    console.log(index + ' : ' + el);
});
//foo: a
//bar: b
//baz: c

let _ = require('lodash');


let names = 'foo_81628bar_42foobar_7771234';

let items = _.split(names, /_\d+/);

console.log(_.initial(items));
// [ 'foo', 'bar', 'foobar' ]

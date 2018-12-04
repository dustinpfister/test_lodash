let _ = require('lodash');

let foo = {};

let path = 'bar.foobar.answer.to.life';

_.set(foo, path, 42);

console.log(_.get(foo,path)); // 42

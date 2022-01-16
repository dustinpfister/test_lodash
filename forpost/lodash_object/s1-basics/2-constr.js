let _ = require('lodash');
// a constructor function
let Foo = function(){
    let foo = this;
    _.forEach(arguments, (n, i) =>{
        foo[i] = n;
    });
    Object.defineProperty(foo, 'length', {value: _.keys(foo).length } );
};
Foo.prototype.bar = function(){
    return _.sum(_.values(this));
};
// an instance of this constructor
let foo = new Foo(1,2,3);
console.log(foo);
// Foo { '0': 1, '1': 2, '2': 3 }
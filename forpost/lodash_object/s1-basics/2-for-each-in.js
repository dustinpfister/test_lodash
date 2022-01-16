let _ = require('lodash');

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


let func = (v, k) => {
    console.log(k);
};

let foo = new Foo(1,2,3);


// for each is a 'collection' method as such
// if will loop over all public own properties
_.forEach(foo, func);
// 0 1 2

// the forIn Object method will loop over all pubic own properties
// as well as all public properties in the prototype object of the Class
_.forIn(foo, func);
// 0 1 2 'bar'


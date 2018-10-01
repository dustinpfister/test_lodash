let _ = require('lodash');

// and object with own, and inherited properties
let a = _.create({
        proto_prop: 42
    }, {
        own_prop: 37
    });

// another object, with just own properties
let b = {
    own_prop_two: true
};

// extend will assign own, and inherited properties
console.log( _.extend({},a,b) ); // { own_prop: 37, proto_prop: 42, own_prop_two: true }

// _.assign will not assign inherited properties
console.log( _.assign({},a,b) ); // { own_prop: 37, proto_prop: 42, own_prop_two: true }

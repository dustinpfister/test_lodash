let _ = require('lodash');

// and object with own, and inherited properties,
// and a nested object as one of its own properties
let a = _.create({
        proto_prop: 42,
        nested_prop: {
            foo: 'bar'
        }
    }, {
        own_prop: 37
    });

// another object, with just own properties
let b = {
    own_prop_two: true
};

// extend will assign own, and inherited properties
let c = _.extend({}, a, b);
console.log(c);
/*{ own_prop: 37,
proto_prop: 42,
nested_prop: { foo: 'baz' },
own_prop_two: true }
 */

// because properties are referenced, and not copied
// any change to the original will effect the object that
// is the result
a.nested_prop.foo = 'baz';
console.log(c.nested_prop.foo); // baz

// However this is not the case with _.merge
let d = _.merge({}, a, b);
a.nested_prop.foo = 'foobar';
console.log(d.nested_prop.foo); // baz (no change to merged object)
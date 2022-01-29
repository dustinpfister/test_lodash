let _ = require('lodash');
 
let a = Object.create({
    foo: 'bar'
});
a.bar = 42;
 
// so then assign by itself will not cut it, as that will
// just assign own properties of objects
let b = Object.assign({}, a)
console.log(b) // {bar: 42}
 
// however assign can be used in conjunction with the Object.getPrototypeOf method
// to get a similar effect to that of the lodash extend method
let c = Object.assign({}, a, Object.getPrototypeOf(a));
console.log(c); // { bar: 42, foo: 'bar' }
// c then also has an empty prototype object
console.log( Object.getPrototypeOf(c) ); // {}
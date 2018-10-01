let _ = require('lodash');

let A = function () {

    this.b = 42

};

A.prototype.c = 7;

var a = new A();


// a for in loop works
for (let prop in a) {
  console.log(prop + ' : ' +a[prop]);
}


let keys = Object.keys(a).concat(Object.keys(a.constructor.prototype));

keys.forEach(function (key) {
    var val = a[key];
    console.log(key + ' : ' + val);
});


/*
// Only loops over own properties

//console.log(Object.keys(a));

//console.log(Object.values(a))

Object.getOwnPropertyNames(a).forEach(function(key){

console.log(a[key]); // 42

})
*/

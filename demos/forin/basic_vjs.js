let _ = require('lodash');

let A = function () {

    this.b = 42

};

A.prototype.c = 7;

var a = new A();

// a for in loop works
for (var prop in a) {
    console.log(a[prop]);
}

/*
// Only loops over own properties

//console.log(Object.keys(a));


Object.getOwnPropertyNames(a).forEach(function(key){

console.log(a[key]); // 42

})
*/

let keys = Object.keys(a).concat(Object.keys(a.constructor.prototype));
 
keys.forEach(function (key) {
    var val = a[key];
    console.log(key + ' : ' + val);
});
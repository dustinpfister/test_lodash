let a = {
    foo: 'a',
    bar: 'b',
    baz: 'c'
};
Object.keys(a).forEach(function(key){
    var val = a[key];
    console.log(key + ' : ' + val);
});
//foo: a
//bar: b
//baz: c

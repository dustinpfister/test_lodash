let b = {
    foo: 'a',
    bar: 'b',
    baz: 'c'
},
i = 0,
keys = Object.keys(b),
len = keys.length,
k, val;
while(i < len){
    k = keys[i];
    val = b[k];
    console.log(k + ' : ' + val);
    i += 1;
}
//foo: a
//bar: b
//baz: c


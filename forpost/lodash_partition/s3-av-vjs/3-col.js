// creating a function
let part = (source, condition) => {
    let values = source instanceof Array ? source : Object.values(source),
    keys = Object.keys(source),
    i = 0,
    len = values.length,
    parts = [[], []];
    condition = condition || function (el, key, source, i) {};
    while (i < len) {
        let el = values[i],
        pi = condition(el, keys[i], source, i) ? 0 : 1;
        parts[pi].push(el);
        i += 1;
    }
    return parts;
};
// demo
let source = {
    foo: 42,
    bar: 'baz',
    taz: false
};
let b = part(source, (el, key, source, i) => {
        console.log(el, key, source instanceof Array, i);
        return typeof el === 'number' && !Number.isNaN(el);
    });
console.log(b);
// 42 'foo' false 0
// baz bar false 1
// false 'taz' false 2
//[ [ 42 ], [ 'baz', false ] ]

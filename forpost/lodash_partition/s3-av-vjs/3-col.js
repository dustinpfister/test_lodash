// creating a function
let part = (source, condition) => {
    let values = source instanceof Array ? source : Object.values(source),
    keys = Object.keys(source),
    i = values.length,
    parts = [[], []];
    condition = condition || function (el) {};
    while (i--) {
        let el = values[i],
        pi = condition(el, keys[i], source) ? 0 : 1;
        parts[pi].unshift(el);
    }
    return parts;
};
// demo
let source = {
    foo: 42,
    bar: 'baz',
    taz: false
};
let b = part(source, (el) => {
        return typeof el === 'number' && !Number.isNaN(el);
    });
console.log(b);
//[ [ 8, 32, 64, 128 ], [ null, 'foo', NaN, 'bar', false, {} ] ]

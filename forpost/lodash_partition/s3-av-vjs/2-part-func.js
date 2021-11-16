let part = (source, condition) => {
    i = source.length,
    parts = [[], []],
    condition = condition || function (el) {};
    while (i--) {
        let el = source[i],
        pi = condition(el) ? 0 : 1;
        parts[pi].unshift(el);
    }
    return parts;
};

let source = [8, null, 32, 'foo', NaN, 'bar', false, {}, 64, 128]; // source array
let b = part(source, (el) => {
        return typeof el === 'number' && !Number.isNaN(el);
    });
console.log(b);
//[ [ 8, 32, 64, 128 ], [ null, 'foo', NaN, 'bar', false, {} ] ]

let arr = [8, null, 32, 'foo', NaN, 'bar', false, {}, 64, 128];
let i = arr.length,
parts = [[], []],
condition = (el) => {
    return typeof el === 'number' && !Number.isNaN(el);
};
while (i--) {
    let el = arr[i],
    pi = condition(el) ? 0 : 1;
    parts[pi].unshift(el);
}
console.log(parts);
//[ [ 8, 32, 64, 128 ], [ null, 'foo', NaN, 'bar', false, {} ] ]


let source = [8, null, 32, 'foo', NaN, 'bar', false, {}, 64, 128], // source array
i = source.length, // index
parts = [[], []],  // the parts array
condition = (el) => { // a condition
    return typeof el === 'number' && !Number.isNaN(el);
};
// loop over elements of the source array, and call the condition function for each
// the the return value of the condition is true, add to the first array, else the second
while (i--) {
    let el = source[i],
    pi = condition(el) ? 0 : 1;
    parts[pi].unshift(el);
}
console.log(parts);
//[ [ 8, 32, 64, 128 ], [ null, 'foo', NaN, 'bar', false, {} ] ]


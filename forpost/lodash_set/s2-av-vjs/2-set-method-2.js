// https://stackoverflow.com/questions/13719593/how-to-set-object-property-of-object-property-of-given-its-string-name-in-ja
/**
 * Set the value of a deep property, creating new objects as necessary.
 * @param {Object} obj The object to set the value on.
 * @param {String|String[]} path The property to set.
 * @param {*} value The value to set.
 * @return {Object} The object at the end of the path.
 * @author github.com/victornpb
 * @see https://stackoverflow.com/a/46060952/938822
 * @example
 * setDeep(obj, 'foo.bar.baz', 'quux');
 */
function setDeep(obj, path, value) {
    const props = typeof path === 'string' ? path.split('.') : path;
    for (var i = 0, n = props.length - 1; i < n; ++i) {
        obj = obj[props[i]] = obj[props[i]] || {};
    }
    obj[props[i]] = value;
    return obj;
}

let foo = {};
setDeep(foo, 'bar.foobar.answer.to.life', 42);
console.log(foo.bar.foobar.answer.to.life); // 42

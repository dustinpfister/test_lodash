// in props method using Array.some
let inProps = (key, props) => {
    return props.some((omitKey) => {
        return omitKey === key;
    });
};
// omit method using my inProps method and Object.keys
let omit = (obj, props) => {
    let newObj = {};
    Object.keys(obj).forEach((key) => {
        if (!inProps(key, props)) {
            newObj[key] = obj[key];
        }
    });
    return newObj
}
// works as expected
let obj = {
    index: 0,
    x: 5,
    y: 12,
    z: 3
};
console.log(omit(obj, ['index', 'z']));
// { x: 5, y: 12 }

let pick = function (sourceObj, pickedKeys) {
    let newObj = {};
    Object.keys(sourceObj).filter((sourceKey) => {
        return pickedKeys.some((key) => {
            return sourceKey === key;
        });
    }).forEach(function (key) {
        newObj[key] = sourceObj[key];
    });
    return newObj;
};

let obj = {
    x: 42,
    y: 30,
    heading: 1.57,
    pps: 32
};

let point = pick(obj, ['x', 'y']);
console.log(point);

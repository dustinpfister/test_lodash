var countBy = (obj, func) => {
    var counts = {};
    var arr = Object.keys(obj);
    arr.forEach((sourceKey, i, arr) => {
        var el = obj[sourceKey];
        var key = func.call(obj, el, sourceKey, obj);
        counts[key] = counts[key] === undefined ? 1 : counts[key] += 1;
    });
    return counts;
};

let arr = [{
        username: 'john',
        score: 37
    }, {
        username: 'jake',
        score: 67
    }, {
        username: 'bill',
        score: 20
    }
];

console.log(countBy(arr, function (el) {
        return el.score >= 65 ? 'pass' : 'fail';
    }));

var ObjectValues = function (obj) {
    var values = [];
    for (var k in obj) {
        values.push(obj[k]);
    }
    return values;
};

var point = {
    x: 15,
    y: 25
};

console.log( ObjectValues(point) ); // [ 15, 25 ]

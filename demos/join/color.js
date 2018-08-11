let _ = require('lodash');

var toRGBA = function (colorArray) {

    colorArray[3] = _.round(colorArray[3] / 255, 2);

    return 'rgba(' + _.join(colorArray, ',') + ')';

};

console.log(toRGBA([255, 126, 64, 203])); // 'rgba(255,126,64,0.8)'

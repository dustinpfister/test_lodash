let _ = require('lodash');

let sum = Array.prototype.reduce.call({0: 1,1: 1,2: 1,3: 1,length: 4},(sum, cur)=>{

    return sum + cur;

});

console.log(sum); // 4


let sumObj = function (obj) {

    let nObj = Object.assign({}, obj, {
            length: Object.keys(obj).length
        });

    return Array.prototype.reduce.call(nObj,function (sum, cur) {

        return sum + cur;

    });

};

console.log(sumObj({
        0: 1,
        1: 1,
        2: 1,
        3: 1
    }));

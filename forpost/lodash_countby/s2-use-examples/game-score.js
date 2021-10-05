let _ = require('lodash');

let units = {
    slime: {
        worth: 1
    },
    bat: {
        worth: 5
    }
};

let deadUnits = [{
        type: 'bat'
    }, {
        type: 'bat'
    }, {
        type: 'slime'
    }
];

let typeCounts = _.countBy(deadUnits, (unit) => unit.type);

let scoreDelta = Object.keys(typeCounts).reduce((acc, key) => {
        return acc + typeCounts[key] * units[key].worth;
    }, 0);

console.log(scoreDelta); // 11

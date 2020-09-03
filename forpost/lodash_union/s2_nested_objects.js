let _ = require('lodash');

let obj = {
    i: 0
};

let a = [{
        i: 1
    }, obj],
b = [[{
            x: 2
        },
        obj
    ]
];

let arr = _.union(a, b);

// this will result in the nested array being one of the unique values
// so the unique value will be the array, rather than the elements of it,
// and the reference to the same object will be in there twice
console.log(arr);
//[ { i: 1 }, { i: 0 }, [ { x: 2 }, { i: 0 } ] ] 

// so the _.flatten method can be used to flatten the nested array
b = _.flatten(b);
arr = _.union(a, b);
console.log(arr);
// [ { i: 1 }, { i: 0 }, { x: 2 } ]
var objs = [{
        n: 12
    }, {
        n: 42
    }, {
        n: 7
    }
];
 
// Array.findIndex works given the proper method
console.log( objs.findIndex(function(el){
 
    return el.n === 42;
 
}) ); // 1
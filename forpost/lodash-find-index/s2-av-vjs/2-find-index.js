let objs = [
    { n: 12 },
    { n: 42 }, 
    { n: 7 }
];
// Array.findIndex works given the proper method
let i = objs.findIndex(function(el){
    return el.n === 42;
});
console.log( i ); // 1
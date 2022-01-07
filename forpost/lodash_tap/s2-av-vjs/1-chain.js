let a = [4, -1, 7, 7, -3, -5, 1];

let b = a.filter(function(val){
    return val > 0;
});
console.log( b ); // [4, 7, 7, 1]
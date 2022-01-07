let a = [1, 2, 3, 4, 5]

// IIFE
let b = a.map((n) => {
        return Math.pow(n, 2);
    });
b[3] = 0;

console.log(b);
//[ 1, 4, 9, 0, 25 ]

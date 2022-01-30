
let sizeDataStr = (str) => {
   return Buffer.from(str).length
};

console.log(sizeDataStr('\u0080')); // 2

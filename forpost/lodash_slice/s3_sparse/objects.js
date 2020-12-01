let a = {
  0: undefined,
  1: undefined,
  2: undefined,
  length: 3
};

let b = {
  length: 3
};

let mapper = (x, i) => {
   return i;
};
a = [].map.call(a, mapper);
b = [].map.call(b, mapper);

console.log(a); // [0, 1, 2]
console.log(b); // [ <3 empty items> ]
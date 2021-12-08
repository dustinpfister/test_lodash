const getColorArray = (colors, index) => {
    let obj = colors[index];
    return [obj.r, obj.g, obj.b, obj.a];
};

let colors = [
    {a: 255,r: 128,b: 0,g: 64},
    {a: 255,r: 32,b: 32,g: 0},
    {a: 255,r: 28, b: 28,g: 28}
];

let cArr = getColorArray(colors, 1);
console.log(cArr);
// [ 32, 0, 32, 255 ]
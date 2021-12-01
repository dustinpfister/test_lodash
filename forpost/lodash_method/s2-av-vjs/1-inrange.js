let inRange = function(){
    return this.x < 9 && this.x >=0 
}
let points = [
    { pt: { x: -1, tester: inRange } },
    { pt: { x: 5, tester: inRange} },
    { pt: { x: 3, tester: inRange} },
    { pt: { x: 25, tester: inRange} },
];
// using native javaScript array methods
let f = points.filter((obj)=>{
    return obj.pt.tester.call(obj.pt);
}).map((el)=>{
    return el.pt.x;
});
console.log(f); // [5, 3];

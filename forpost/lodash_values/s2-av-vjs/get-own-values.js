var point = {
    x: 15,
    y: 25
};
// I can define an object property that is
// not enumerable with the Object.defineProperty method
Object.defineProperty(point, 'color', {
    value: '#ff0000',
    writable: false,
    enumerable: false
});
// as such it will not show up with methods like Object.values
console.log(Object.values(point)); // [15, 25]
// So I need to use a solution that will involve the use of
// getOwnProperyNames and also possibly get own property descriptor
var ObjectKeysAll = () => {
    return Object.getOwnPropertyNames(point).map((key) => {
        return Object.getOwnPropertyDescriptor(point, key).value;
    });
};
console.log( ObjectKeysAll(point) ); //[ 15, 25, '#ff0000' ]


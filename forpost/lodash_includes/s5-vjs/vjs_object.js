let tester = (val) => {
    return function (el) {
        return el === val;
    };
};

let obj = {
    a: 'foo',
    b: 'bar'
};

console.log( Object.values(obj).includes('foo') );
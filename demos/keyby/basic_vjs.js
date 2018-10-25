let units = [{
        type: 'a',
        price: 10
    }, {
        type: 'b',
        price: 12
    }, {
        type: 'a',
        price: 9
    }
];

let counts = {
    a: 0,
    b: 0
};

let keyed = {};
units.forEach((unit) => {
    let c = counts[unit.type]++;
    keyed[unit.type + c] = unit;
});

console.log(keyed);

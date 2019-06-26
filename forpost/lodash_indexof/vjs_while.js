let findIndexes = (opt) => {

    opt = opt || {};
    opt.arr = opt.arr || [];
    opt.term = opt.term || '';
    opt.lookFor = opt.lookFor || function (el, term) {
        if (el === term) {
            return true;
        }
        return false;
    };
    opt.reverse = opt.reverse || false;

    let len = opt.arr.length;
    let i = opt.reverse ? len : 0;
    let indexes = [];
    while (opt.reverse ? i-- : i < len) {

        console.log(i);

        if (!opt.reverse) {
            i += 1;
        }

    }

    return indexes;
};

let indexes = findIndexes({
        arr: ['zero', 'one', 'two', 'three', 'two'],
        term: 'two'
    });

// all of them
console.log(indexes); // [2,4]

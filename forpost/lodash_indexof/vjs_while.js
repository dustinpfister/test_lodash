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
    let len = opt.arr.length,
    i = opt.reverse ? len : 0,
    indexes = [];
    while (opt.reverse ? i-- : i < len) {
        if (opt.lookFor(opt.arr[i], opt.term)) {
            indexes.push(i);
        }
        if (!opt.reverse) {
            i += 1;
        }
    }
    return indexes;
};

// check it
let indexes = findIndexes({
        arr: ['zero', 'one', 'two', 'three', 'two'],
        term: 'two'
    });
// first from the left
console.log(indexes[0]); // 2
// all of them
console.log(indexes); // [2,4]

// Now for an array of objects
let postIndexes = findIndexes({
        arr: [
            {cat:'lodash', name:'lodash_indexof',wordCount:250},
            {cat:'lodash', name:'lodash-find',wordCount:850},
            {cat:'js', name:'js-fetch',wordCount:230},
            {cat:'lodash', name:'lo-merge',wordCount:1250}
        ],
        term: 'lodash',
        reverse: true,
        lookFor: function(el, term){
            if(el.cat === term && el.wordCount > 500){
                return true;
            }
            return false;
        }
    });

console.log(postIndexes[0]); // 3
console.log(postIndexes); // [3,1]
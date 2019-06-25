let arr = [
    {text: 'In this post I will be writing about something else completely'}, 
    {text: 'This is on lodash find and other topics related to lodash find'}, 
    {text: 'Sorry not what you want to find here'}, 
    {text: 'This is on lodash but not what you are looking for so you must find it elsewhere'}
];

// get a score based on count of term words
let getWordScore = (str, term) => {
    let words = str.split(' ');
    return words.map((w) => {
        let tw = term.split(' '),
        i = tw.length;
        while (i--) {
            if (tw[i] === w) {
                return true;
            }
        }
        return false;
    }).reduce((a, b) => {
        return a + b;
    });
};

// get a score based on full term match
let getFullTermScore = (str, term) => {
    let full = str.match(new RegExp(term, 'g'));
    return full === null ? 0 : full.length;
};

// get score for a string and term
let getScore = (str, term) => {
    return getFullTermScore(str, term) + getWordScore(str, term);
};

let find = (arr, term, count) => {

    // work with a copy
    arr = arr.slice(0, arr.length);

    count = count || 1;

    arr.sort((a, b) => {
        if (getScore(a.text, term) > getScore(b.text, term)) {
            return -1;
        }
        if (getScore(a.text, term) < getScore(b.text, term)) {
            return 1;
        }
        return 0;
    });

    if (count === 1) {
        return arr[0];
    } else {
        return arr.slice(0, count);
    }

};

// just one
console.log( find(arr, 'lodash find') );
// { text: 'This is on lodash find and other topics related to lodash find' }

// top two results
console.log( find(arr, 'lodash find',2) );
// [ { text: 'This is on lodash find and other topics related to lodash find' },
//   { text: 'This is on lodash but not what you are looking for so you must find it elseware' } ]

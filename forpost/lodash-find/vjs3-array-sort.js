let arr = [{
        text: 'In this post I will be writing about something else compleatly'
    }, {
        text: 'This is on lodash find and other topics related to lodash find'
    }, {
        text: 'Sorry not what you want to find here'
    }, {
        text: 'This is on lodash but not what you are looking for so you must find it elseware'
    },
];

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

let getScore = (str,term) => {
    let full = str.match(new RegExp(term, 'g'));
    full = full === null ? 0 : full.length;
    return full + getWordScore(str, term);
};

let term = 'lodash find';
arr = arr.sort((a, b) => {
        if (getScore(a.text, term) > getScore(b.text, term)) {
            return -1;
        }
        if (getScore(a.text, term) < getScore(b.text, term)) {
            return 1;
        }
        return 0;
    });

console.log(arr);

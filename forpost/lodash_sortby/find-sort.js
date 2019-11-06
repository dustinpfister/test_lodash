let _ = require('lodash');

let posts = [{
        wordCount: 300
    }, {
        wordCount: 1600
    }, {
        wordCount: 800
    }, {
        wordCount: 180
    }
];

posts = _.sortBy(posts, (a) => {
        return a.wordCount * -1;
    });

console.log(posts);

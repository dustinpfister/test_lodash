let _ = require('lodash');

let posts = [{
        wordCount: 240
    }, {
        wordCount: 300
    }, {
        wordCount: 1600
    }, {
        wordCount: 800
    }, {
        wordCount: 1800
    }, {
        wordCount: 550
    }
];

// a common iterator that will be
// used with _.find and _.sortBy
let iterator = (a) => {
    return a.wordCount;
};

// find will just return the first item that
// will return true for the iterator it will
// not sort
let findPost = _.find(posts, iterator);
console.log(findPost.wordCount); // 240

// Sort by will actually sort all elements
// that meet the condition, and leave
// those that do not
topPosts = _.sortBy(posts, iterator);
console.log(topPosts.pop().wordCount); // 1800
console.log(topPosts.pop().wordCount); // 1600
console.log(topPosts.pop().wordCount); // 800
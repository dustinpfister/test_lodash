let _ = require('lodash');

let text = 'So lets have some fun with javaScript and words today',
words = _.words(text);

// almost words okay
console.log(words);
// ['So', 'lets', 'have', 'some', 'fun', 'with', 'java', 'Script', 'and', 'words', 'today']

words = _.words(text.toLowerCase());
console.log(words);
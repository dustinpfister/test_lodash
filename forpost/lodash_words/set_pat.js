let _ = require('lodash');

let text = 'This has the word javaScript in it';

// just using lodash words by itself will give an unexpected result
console.log( _.words(text) );
// [ 'This', 'has', 'the', 'word', 'java', 'Script', 'in', 'it' ]

// I could make all the words lowercase, but another option would be to use
// a regular expression pattern
console.log(  _.words(text.toLowerCase()) );
// [ 'this', 'has', 'the', 'word', 'javascript', 'in', 'it' ]
console.log(  _.words(text, /\w+/g) );
// [ 'this', 'has', 'the', 'word', 'javascript', 'in', 'it' ]


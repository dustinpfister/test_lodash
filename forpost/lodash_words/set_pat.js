let _ = require('lodash');

let text = 'This has the word javaScript in it';

console.log( _.words(text, /\w+/g) );
console.log(  _.words(text, /\w+/g) );
console.log(  _.words(text, /\w+/g) );


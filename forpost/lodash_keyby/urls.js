let _ = require('lodash');

let data = [
{ rel:'link1', url:'https://www.google.com/'},
{ rel:'link2', url:'https://dustinpfister.github.io/'}
];


console.log(_.keyBy(data,'rel'));

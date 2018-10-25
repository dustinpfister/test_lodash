let _ = require('lodash');

let log = (text) => {
    console.log(text);
};

Array.from({length:4},(_,i)=> console.log('foo'));

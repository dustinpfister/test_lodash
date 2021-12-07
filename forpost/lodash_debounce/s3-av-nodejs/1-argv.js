#!/bin/env node
// parse arguments if any
var count = parseInt(process.argv[2] === undefined ? 3 : process.argv[2]);
var ms = parseInt(process.argv[3] === undefined ? 1000 : process.argv[3]);
// loop
var loop = function(){
    if(count > 1){
        setTimeout(loop, ms);
    }
    count -= 1;
    console.log('count=' + count);
};
// start loop
loop();

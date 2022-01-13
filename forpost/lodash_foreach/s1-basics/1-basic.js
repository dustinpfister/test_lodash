let _ = require('lodash');
 // lodash _.forEach
 _.forEach(['a','b','c'], function(el,index,arr){
    console.log(index + ' : ' +el + ' : ' + arr);
    if(el === 'b'){
        return false;
    }
 });
 // 0 : a : a,b,c
 // 1 : b : a,b,c
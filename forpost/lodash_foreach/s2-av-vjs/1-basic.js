// native Array.forEach
['a','b','c'].forEach(function(el,index,arr){
    console.log(index + ' : ' +el + ' : ' + arr);
    if(el === 'b'){
        return false; // does nothing to stop it
    }
});
 // 0 : a : a,b,c
 // 1 : b : a,b,c
 // 2 : c : a,b,c
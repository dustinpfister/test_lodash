var utils = {};
 
// set a given path to a source object to a given value,
// return an error object if something goes wrong, or empty object if all goes well
utils.setPath = function(sourceObj, pathStr, value){
   var propNames = pathStr.split('.');
   var i = 0, len = propNames.length,
   node = sourceObj, tNode;
   while(i < len){
      try{
          // if this is the last index in propNames
          // then set the value to the current object
          // stored in 'node'
          if(i === len - 1){
              node[propNames[i]] = value;
          }else{
              // else I need to create an object
              // for a given prop name if the key
              // is undefined, and update node var
              tNode = node[propNames[i]];
              // create new object if undefined
              if(tNode === undefined){
                  tNode = node[propNames[i]] = {};
              }
              // if tNode is not an object
              if(typeof tNode != 'object' || tNode === null){
                  return new Error('Property ' + propNames[i] + ' is not an object or is null.');
              }
              node = tNode;
          }
      }catch(e){
          return e;
      }
      i += 1;
   }
   return {};
};
 
let foo = {};
utils.setPath(foo, 'bar.foobar.answer.to.life', 42);
console.log(foo.bar.foobar.answer.to.life); // 42

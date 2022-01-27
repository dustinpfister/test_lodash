var str = '/home/dustin/github/test_lodash/';
var folders = str.split('/').filter(function(str){
    return str != '';
});
console.log(folders);
//[ 'home', 'dustin', 'github', 'test_lodash' ]
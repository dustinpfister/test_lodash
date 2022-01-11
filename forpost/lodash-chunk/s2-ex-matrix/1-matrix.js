
let _ = require('lodash');
 
// matrix data example
let data = {
    w : 10,
    colors : ['grey', 'blue','red'],
    px : [
        1,1,1,1,2,2,2,2,2,2,
        1,0,0,1,0,0,0,0,0,0,
        1,1,1,1,2,2,2,2,2,2,
        0,0,0,0,0,0,0,0,0,0,
        2,2,2,2,2,2,2,2,2,2],
    // my toMatrix method using _.chunk
    toMatrix : function(){
        return _.chunk(this.px,this.w);
    }
};
 
// draw it out like this
var html = '';
data.toMatrix().forEach(function (line) {
    line.forEach(function (px) {
        html += '<span style=\"color: '+data.colors[px]+';\">X<\/span>';
    });
    html += '<br>';
});
console.log(html);
/*
<span style="color: blue;">X</span><span style="color: blue;">X</span><span style="color: blue;">X</span><span style="color: blue;">X</span><span style="color: red;">X</span><span style="color: red;">X</span><span style="color: red;">X</span><span style="color: red;">X</span><span style="color: red;">X</span><span style="color: red;">X</span><br><span style="color: blue;">X</span><span style="color: grey;">X</span><span style="color: grey;">X</span><span style="color: blue;">X</span><span style="color: grey;">X</span><span style="color: grey;">X</span><span style="color: grey;">X</span><span style="color: grey;">X</span><span style="color: grey;">X</span><span style="color: grey;">X</span><br><span style="color: blue;">X</span><span style="color: blue;">X</span><span style="color: blue;">X</span><span style="color: blue;">X</span><span style="color: red;">X</span><span style="color: red;">X</span><span style="color: red;">X</span><span style="color: red;">X</span><span style="color: red;">X</span><span style="color: red;">X</span><br><span style="color: grey;">X</span><span style="color: grey;">X</span><span style="color: grey;">X</span><span style="color: grey;">X</span><span style="color: grey;">X</span><span style="color: grey;">X</span><span style="color: grey;">X</span><span style="color: grey;">X</span><span style="color: grey;">X</span><span style="color: grey;">X</span><br><span style="color: red;">X</span><span style="color: red;">X</span><span style="color: red;">X</span><span style="color: red;">X</span><span style="color: red;">X</span><span style="color: red;">X</span><span style="color: red;">X</span><span style="color: red;">X</span><span style="color: red;">X</span><span style="color: red;">X</span><br>
*/


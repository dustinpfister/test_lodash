let _ = require('lodash');

let init = _.template('<div><%= html %></div>'),
esc = _.template('<div><%- html %></div>'),

obj = {
    html: '<script>console.log(\'boo\');<\/script>'
},

str = init(obj),
str_esc = esc(obj);

console.log(str); 
// '<div><script>console.log('boo');</script></div>'
console.log(str_esc); 
// '<div>&lt;script&gt;console.log(&#39;boo&#39;);&lt;/script&gt;</div>'

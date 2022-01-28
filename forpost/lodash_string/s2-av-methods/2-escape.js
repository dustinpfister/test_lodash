let _ = require('lodash');

let a = _.escape('Some times < text & code > things need to be escaped');
console.log(a);
// Some times &lt; text &amp; code &gt; things need to be escaped

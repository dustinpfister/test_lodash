let _ = require('lodash');

comp = _.template('<% _.forEach(cans,function(can){ %><span><%- can %><\/span><br><%});%>'),

html = comp({
        cans: ['beens', 'peas', 'carrots']
    });

console.log(html);

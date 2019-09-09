let _ = require('lodash');

let trap = _.once((mess) => {
        console.log(mess);
    });

trap('okay'); // 'okay' logged to the console
trap('nope'); //

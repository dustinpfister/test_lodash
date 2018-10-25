let _ = require('lodash');

let log = (text) => {
    console.log(text);
};
let i = 0;
while (i < 4) {
    log('foo');
    i += 1;
}

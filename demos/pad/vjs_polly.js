
let an = 1503345;

var padStart = function (len, filler) {

    var fill = '', toFill = 0;

    len = len || 0;
    filler = String(filler === undefined ? ' ' : filler);
    toFill = len - String(this).length;

    if (toFill > 0) {

        fill = Array.apply(null, Array(toFill)).map(String.prototype.valueOf, filler).join('');
 
    }

    return fill + this;

};

console.log(padStart.call(String(an),10, 0)); // '0001503345'


// monkey patch it with the pollyfill
String.prototype.padStart = String.prototype.padStart || function (len, filler) {

    var fill = '', toFill = 0;

    len = len || 0;
    filler = String(filler === undefined ? ' ' : filler);
    toFill = len - String(this).length;

    if (toFill > 0) {

        fill = Array.apply(null, Array(toFill)).map(String.prototype.valueOf, filler).join('');
 
    }

    return fill + this;

};
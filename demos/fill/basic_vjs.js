
Array.prototype.fill = Array.prototype.fill || function (val, start, end) {

    var i;

    start = start === undefined ? 0 : start;
    end = end === undefined ? this.length : end;

    i = start;
    while (i < end) {

        this[i] = val;
        i += 1;
    }

    return this;

};

var b = new Array(8).fill(0);

console.log(b);


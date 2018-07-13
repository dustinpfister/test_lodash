let _ = require('lodash');

let grid = {

    // the col width, and grid cells stored as a linear array
    w : 3,
    cells : [
        {gold: 1,wood:0},{gold: 0,wood:7},{gold: 2,wood:9},
        {gold: 0,wood:0},{gold: 0,wood:7},{gold: 0,wood:7},
        {gold: 0,wood:0},{gold: 10,wood:0},{gold: 0,wood:6}],

    // chunk the linear array into an array of arrays
    chunkIt: function () {

        return _.chunk(this.cells, this.w)

    },

    // get a row by index
    getRow: function (i) {

        return this.chunkIt()[i];

    },

    // get a col by index
    getCol: function (index) {

        return _.map(this.chunkIt(), function (row) {

            return row[index];

        });

    }

};

// get row 1
console.log(grid.getRow(1));

// get col 1
console.log(grid.getCol(1));

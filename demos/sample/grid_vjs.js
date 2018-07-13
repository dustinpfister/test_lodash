//let _ = require('lodash');

let grid = {

    // the col width, and grid cells stored as a linear array
    w: 3,
    cells : [
        {gold: 1,wood:0},{gold: 0,wood:7},{gold: 2,wood:9},
        {gold: 0,wood:0},{gold: 0,wood:7},{gold: 0,wood:7},
        {gold: 0,wood:0},{gold: 10,wood:0},{gold: 0,wood:6}],

    // chunk the linear array into an array of arrays
    // where each array is a row
    chunkToRows: function () {

        let matrix = [],
        i = 0;
        while (i < this.cells.length) {

            let x = i % this.w,
            y = Math.floor(i / this.w);

            if (!matrix[y]) {

                matrix[y] = [];

            }

            let row = matrix[y];

            row.push(this.cells[y * this.w + x]);

            i += 1;

        }

        return matrix;

    },

    // chunk the linear array into an array of arrays
    // where each array is a col (rotated right)
    chunkToCols: function () {

        let copy = [],
        original = this.chunkToRows(),
        i = 0;
        while (i < this.cells.length) {

            let x = i % this.w,
            y = Math.floor(i / this.w);

            // create row if it doesn't exist yet
            if (copy[y] === undefined) {
                copy[y] = [];

            }

            // swap
            copy[y][x] = original[x][y];

            i += 1;
        }
        return copy;

    },

    // get a Random row, col or cell
    rnd: function (what) {

        what = what || 'cell';

        // get a random row
        if (what === 'row') {

            let rows = this.chunkToRows();
            return rows[  Math.floor( Math.random() * rows.length ) ];

        }

        // get a random col
        if (what === 'col') {

            let cols = this.chunkToCols();
            return cols[  Math.floor( Math.random() * cols.length ) ];

        }

        // default to getting a random single cell
        return this.cells[  Math.floor( Math.random() * this.cells.length ) ];

    }

};

//console.log(grid.chunkToCols());

console.log(grid.rnd());
console.log(grid.rnd('row'));
console.log(grid.rnd('col'));

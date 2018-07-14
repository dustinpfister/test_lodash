let _ = require('lodash');

let grid = {

    // the col width, and grid cells stored as a linear array
    w : 3,
    cells : [
        {gold: 1,wood:0},{gold: 0,wood:7},{gold: 2,wood:9},
        {gold: 0,wood:0},{gold: 0,wood:7},{gold: 0,wood:7},
        {gold: 0,wood:0},{gold: 10,wood:0},{gold: 0,wood:6}],

    // chunk the linear array into an array of arrays
    // where each array is a row
    chunkToRows: function () {

        // so _.chunk makes quick work of this
        return _.chunk(this.cells, this.w)

    },

    // chunk the linear array into an array of arrays
    // where each array is a col (rotated right)
    chunkToCols : function(){

        // _.zip is useful for doing this
        return _.zip.apply(0, this.chunkToRows());

    },

    // set the cells array from a set of rows, or cols
    fromMatrix : function(matrix){

        this.cells = _.flatten(matrix);
        this.w = matrix.length;

        return this.cells;

    },

    // get a Random row, col or cell
    rnd: function(what){

       what = what || 'cell';

       // get a random row
       if(what === 'row'){

            return _.sample(this.chunkToRows());

        }

       // get a random col
       if(what === 'col'){

           return _.sample(this.chunkToCols());

       }

        // default to getting a random single cell
        return _.sample(this.cells);

    }

};

// set from matrix
grid.fromMatrix([

  [{g:3},{g:0},{g:1}],
  [{g:0},{g:0},{g:0}],
  [{g:1},{g:0},{g:0}]

]);

console.log('width: ' + grid.w);
console.log('cells: ' + JSON.stringify(grid.cells));

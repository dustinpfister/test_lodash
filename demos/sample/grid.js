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
        return _.zip.apply(null, this.chunkToRows());

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

    },

    // get a Random row, col or cell
    getRnd: function(what){

        what = what || 'cell';

		/*
		if(what === 'row'){
			
			return this.getRow
			
		}
		*/
		
        // for a random cell just return a sample from the whole set
        return _.sample(this.cells);

    }

};

console.log(grid.chunkToCols());

// get row 1
//console.log(grid.getRow(1));

// get col 1
//console.log(grid.getCol(1));

let _ = require('lodash');

let grid = (function () {

    let api = {

        grid: [],
        w: 8,
        h: 8

    };

    // generate a map
    api.genMap = function (opt) {

        opt = opt || {};
        this.w = opt.w || this.w;
        this.h = opt.h || this.h;
        this.grid = [];

        let i = 0,
        len = this.w * this.h;
        while (i < len) {

            let obj = {};

            obj.i = i;
            obj.x = i % this.w;
            obj.y = Math.floor(i / this.w);

            this.grid.push(obj);

            i += 1;

        }

        // chunk the linear array into an array of arrays
        this.grid = _.chunk(this.grid, this.w);

    };

    api.genMap();

    return api;

}
    ());

console.log(grid.grid);

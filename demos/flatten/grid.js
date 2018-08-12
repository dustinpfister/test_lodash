let _ = require('lodash');

let grid = (function () {

    // public api method
    let api = {
        grid: [],
        w: 8,
        h: 8
    };

    // generate a map
    api.genMap = function (opt) {

        opt = opt || {};
        opt.forPos = opt.forPos || function () {};
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

            opt.forPos.call(obj, obj.x, obj.y, obj.i);

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

// money, and tab money
grid.genMap({
    w: 3,
    h: 3,
    forPos: function (x, y, i) {
        this.money = _.random(0, 5);
    }

});

var tabMoney = function () {
    var grid = this;
    return _.reduce(_.flatten(grid.grid), function (acc, obj) {
        return {
            money: acc.money + obj.money
        }
    }).money;
};

console.log(grid.grid);
console.log(tabMoney.call(grid, grid));
/*
[ [ { i: 0, x: 0, y: 0, money: 2 },
    { i: 1, x: 1, y: 0, money: 5 },
    { i: 2, x: 2, y: 0, money: 4 } ],
  [ { i: 3, x: 0, y: 1, money: 4 },
    { i: 4, x: 1, y: 1, money: 1 },
    { i: 5, x: 2, y: 1, money: 4 } ],
  [ { i: 6, x: 0, y: 2, money: 4 },
    { i: 7, x: 1, y: 2, money: 4 },
    { i: 8, x: 2, y: 2, money: 2 } ] ]
30
*/

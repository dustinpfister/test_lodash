let _ = require('lodash');

let Day = function (options) {

    options = options || {};
    this.date = options.date || '1/1/00';
    this.pages = [];
    this.users = 0;
    this.pageviews = 0;

    if (options.pages) {

        this.setPages(options.pages, this.date);

    }

};

// set pages
Day.prototype.setPages = function (pages) {

    let day = this;
    day.pages = _.cloneDeep(pages);
    day.setFromPages();

};

Day.prototype.setFromPages = function () {

    let day = this;
    day.users = 0;
    day.pageviews = 0;

    _.each(day.pages, function (page) {

        day.users += page.users ? page.users : 0;
        day.pageviews += page.pageviews ? page.pageviews : 0;

    });

};

Day.prototype.bounceRate = function () {

    return this.users / this.pageviews;

}

let day = new Day({
        date: '1/2/17',
        pages: [{
                path: '/2017/01/01/hello/',
                users: 3,
                pageviews: 4
            }, {
                path: '/2017/01/02/hello-again/',
                users: 7,
                pageviews: 9
            }

        ]
    });

// my bound rate works
console.log(day.bounceRate());

let custom = _.pick(day, ['date', 'pages']);

//custom = new Day(custom);

console.log(custom.bounceRate());

/*
let day = {
date: '1/2/17',
users: 10,
pageviews: 13,
pages: [{
path: '/2017/01/01/hello/',
users: 3,
pageviews: 4
}, {
path: '/2017/01/02/hello-again/',
users: 7,
pgeviews: 9
}

]
};

let custom = _.pick(day, ['date','users','pages']);

// what is returned is a shallow clone
day.users += 50;
console.log(day.users); // 53
console.log(custom.users); // 53

// but not a deep clone
day.pages[0].users += 50;
console.log(day.pages[0].users); // 53
console.log(custom.pages[0].users); // 53

*/

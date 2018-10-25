let _ = require('lodash');

let resp = [{
        'id': 'soups',
        'recipes': [{
                'id': 's1'
            }, {
                'id': 's2'
            }
        ]
    }, {
        'id': 'salads',
        'recipes': [{
                'id': 's1'
            }, {
                'id': 's2'
            }
        ]
    }
];

let keyed = _.chain(resp)
.keyBy('id')
.mapValues(function (item) {
    item.recipes = _.keyBy(item.recipes, 'id');
    return item;
})
.value();

console.log(keyed)

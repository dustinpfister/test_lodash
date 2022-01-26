let _ = require('lodash');

let resp = [{
        'id': 'soups',
        'recipes': [{
                'id': 's1',
                'name': 'chicken soup'
            }, {
                'id': 's2',
                'name': 'french onion'
            }
        ]
    }, {
        'id': 'salads',
        'recipes': [{
                'id': 's1',
                'name': 'caesar salad'
            }, {
                'id': 's2',
                'name': 'chef salad'
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

console.log(keyed.soups.recipes.s1.name); // 'chicken soup'

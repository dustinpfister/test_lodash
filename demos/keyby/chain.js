let _ = require('lodash');

let resp = [{
        'id': 'soups',
        'recipes': [{
                'id': 4036
            }, {
                'id': 4041
            }
        ]
    }, {
        'id': 'salads',
        'recipes': [{
                'id': 4052
            }, {
                'id': 4053
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

console.log(keyed.soups.recipes['4036'])

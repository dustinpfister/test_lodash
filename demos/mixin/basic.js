let _ = require('lodash');

_.mixin({

    foo: function () {

        return 'bar';

    }

});

console.log(_.foo() );

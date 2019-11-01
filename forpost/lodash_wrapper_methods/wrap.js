/*
// Add `Array` methods to `lodash.prototype`.
baseEach(
    ['pop', 'join', 'replace', 'reverse', 'split', 'push', 'shift', 'sort', 'splice', 'unshift'],
    function (methodName) {
    var func = (/^(?:replace|split)$/.test(methodName) ? String.prototype : arrayProto)[methodName],
    chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
    retUnwrapped = /^(?:pop|join|replace|shift)$/.test(methodName);

    lodash.prototype[methodName] = function () {
        var args = arguments;
        if (retUnwrapped && !this.__chain__) {
            var value = this.value();
            return func.apply(isArray(value) ? value : [], args);
        }
        return this[chainName](function (value) {
            return func.apply(isArray(value) ? value : [], args);
        });
    };
});

*/
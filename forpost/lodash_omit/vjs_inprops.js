let inProps = (key, props) => {

    return props.some((omitKey) => {
        return omitKey === key;
    });

};

console.log( inProps('foo', ['foo', 'bar', 'baz']) );
console.log( inProps('42', ['foo', 'bar', 'baz']) );

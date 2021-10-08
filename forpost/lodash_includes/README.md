# lodash_includes 

These are the source code examples for my post on the [lodash includes method](https://dustinpfister.github.io/2017/11/21/lodash_includes/) that can be used to find out if something is included in a collection of one type or another. This lodash includes method differs from the native array includes method in the sense that it will work with the public keys of any object in general out of the box, not just arrays as it is a so called collection method. However it is often not so hard to do the same thing as what the lodash indludes method does when it comes to sticking to native methods only.

So sure the lodash includes method works with objects in general

```js
var obj = {name:'jack'};
console.log( _.includes(obj,'name') ); // false
console.log( _.includes(obj,'jill') ); // false
console.log( _.includes(obj,'jack') ); // true
```

However it is not always so hard to create an array of values from an object,
then just use the native array includes method

```
let obj = {
    a: 'foo',
    b: 'bar'
};
console.log( Object.values(obj).includes('foo') ); // true
```

So becuase of this the main foucs of the post may be the lodash includes method. However over all the post should cover the various ways to do this with javaScript in general.

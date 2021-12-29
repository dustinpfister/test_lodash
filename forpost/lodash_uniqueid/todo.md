# lodash unique id todo list

## () - new av section on checksums
* 1-basic basic example of a checksum based off of what I made for my array reduce post:

```js
let getCheckSum = function (string, maxValue) {
    maxValue = maxValue == undefined ? Math.pow(10, 7) : maxValue;
    return string.split('').reduce(function (acc, str) {
        return acc += str.charCodeAt(0);
    }, 0) % maxValue;
};
```

## () - expand basic section
* 3-map example creating an id for each object in a collection

## ( done 12/29/2021 ) - expand basic section
* (done) 2-mixin example that will add a myMix method

// is it really hard to make them with function
// expressions too when it comes to ES5 javaScript?
var returnTrue = function () {
    return true;
};
console.log(returnTrue()); // true
// I can use IIFEs when it comes to making them on the spot
var n = (function () {
    return 42
}
    ());
console.log(n); // 42
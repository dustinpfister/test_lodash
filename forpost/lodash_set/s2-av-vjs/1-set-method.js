// https://stackoverflow.com/questions/6842795/dynamic-deep-setting-for-a-javascript-object
// https://stackoverflow.com/a/20240290/2057445
function setValue(obj, path, value) {
  var a = path.split('.')
  var o = obj
  while (a.length - 1) {
    var n = a.shift()
    if (!(n in o)) o[n] = {}
    o = o[n]
  }
  o[a[0]] = value
};

let foo = {};
setValue(foo, 'bar.foobar.answer.to.life', 42);
console.log(foo.bar.foobar.answer.to.life); // 42
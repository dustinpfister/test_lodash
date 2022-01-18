// simple template function using back ticks
var template = (mess) => {
    return `<p>${mess}</p>`;
};
 
var html = template('Hello World');
console.log(html); // <p>Hello World</p>

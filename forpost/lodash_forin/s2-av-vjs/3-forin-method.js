const forIn = (obj, func, state) => {
    func = func || function(el, key, obj){};
    state = state || obj;
    let exit = 0;
    for (let key in obj) {
        // I can do what I want when it comes to setting what the value
        // of the this keyword should be, and I can also do what I want
        // with return values inside the func
        try{
            if(func.call(state, obj[key], key, obj)){
                break;
            }
        }catch(e){
            exit = 1;
            break;
        }
    }
    // I can do what I want with the return value of this forIn loop
    return exit
}


// Simple Constructor and Prototype
let A = function () {
    this.b = 42
};
A.prototype.c = 7;

// using the for in method
let a = new A();
var e = forIn(a, function(el, key, obj){
    console.log(el);
});
// 42 7
console.log(e);
// 0
